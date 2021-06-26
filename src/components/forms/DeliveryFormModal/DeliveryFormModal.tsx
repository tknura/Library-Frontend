import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { GridColDef, GridEditCellPropsParams } from '@material-ui/data-grid'
import { FormikHelpers, useFormik } from 'formik'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal, ModalProps } from 'components/utillity/Modal/Modal'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { useBooksQuery } from 'api/books'
import { DeliveryArticleBasic } from 'api/deliveries'
import { deliveryFormSchema } from 'schemas/deliveryFormSchema'
import * as Styled from './DeliveryFormModal.styles'

interface DeliveryFormFields {
  deliveryArticles: DeliveryArticleBasic[],
  expectedDeliveryDate: Date
}

interface DeliveryFormModalProps extends Omit<ModalProps, 'children' | 'onSubmit'> {
  onClose: () => void
  onSubmit: (values: DeliveryFormFields, helpers: FormikHelpers<DeliveryFormFields>) => void
  initialValues?: DeliveryFormFields
}

const defaultValues = {
  deliveryArticles: [],
  expectedDeliveryDate: new Date()
}

const DeliveryFormModal = ({
  onClose: handleClose,
  onSubmit: handleSubmit,
  initialValues = defaultValues,
  ...props
}: DeliveryFormModalProps): JSX.Element => {
  const { isLoading, isError, data } = useBooksQuery({ refetchOnWindowFocus: false })
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  if (isError) {
    show({ message: t('screen.details.errorMessage'), type: SNACKBAR_ERROR })
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: t('screen.manageBooks.id'), width: 110 },
    { field: 'title', headerName: t('screen.manageBooks.title'), width: 210 },
    { field: 'author', headerName: t('screen.manageBooks.author'), width: 210 },
    { field: 'amount', headerName: t('screen.manageDeliveries.quantity'), width: 120, editable: true }
  ]

  const rows = data?.content.map((book) => ({
    id: book.bookId,
    title: book.name,
    author: book.author,
    amount: 0
  })) || []

  const {
    handleSubmit: handleFormSubmit,
    setFieldValue,
    setValues,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: deliveryFormSchema,
  })

  const handleChangeDate = (targetDate: MaterialUiPickersDate) => {
    if (targetDate) {
      setFieldValue('expectedDeliveryDate', targetDate)
    }
  }

  const handleChangeArticles = (params: GridEditCellPropsParams) => {
    rows[params.id as number - 1].amount = params.props.value as number
    const newArticles = rows.filter(row => row.amount > 0).map((row) => ({
      articleDetailId: row.id,
      amount: row.amount
    })) as DeliveryArticleBasic[]
    setFieldValue('deliveryArticles', newArticles)
  }

  useEffect(() => {
    setValues(initialValues)
  }, [initialValues, setValues])

  return (
    <Modal onClose={handleClose} {...props}>
      <Modal.Title>
        {t('screen.manageDeliveries.addDelivery')}
      </Modal.Title>
      <Styled.ModalContent>
        <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
          <Styled.DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            loading={isLoading}
            onEditCellChangeCommitted={handleChangeArticles}
          />
          <Styled.DatePicker
            value={values.expectedDeliveryDate}
            error={touched.expectedDeliveryDate && !!errors.expectedDeliveryDate}
            helperText={touched.expectedDeliveryDate && t(errors.expectedDeliveryDate as string)}
            onChange={handleChangeDate}
            inputVariant="outlined"
            label={t('screen.manageDeliveries.expectedDelivery')}
          />
        </Styled.Form>
      </Styled.ModalContent>
      <Modal.Actions
        onCancel={handleClose}
        onSave={handleFormSubmit}
      />
    </Modal>
  )
}

export { DeliveryFormModal }
export type { DeliveryFormFields }
