import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import { Modal, ModalProps } from 'components/utillity/Modal/Modal'
import { FormikHelpers, useFormik } from 'formik'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { bookFormSchema } from 'schemas/bookFormSchema'
import * as Styled from './BookFormModal.styles'

interface BookFormFields {
  serialNumber: number
  title: string
  author: string
  description: string
  publicationDate: Date
  publisher: string
}

type BookModalMode = 'EDIT' | 'CREATE'

interface BookFormModalProps extends Omit<ModalProps, 'children' | 'onSubmit'> {
  mode: BookModalMode
  onClose: () => void
  onSubmit: (values: BookFormFields, helpers: FormikHelpers<BookFormFields>) => void
  initialValues?: BookFormFields
}

const defaultValues = {
  serialNumber: 0,
  title: '',
  author: '',
  description: '',
  publicationDate: new Date(),
  publisher: ''
}

const BookFormModal = ({
  mode = 'CREATE',
  onClose: handleClose,
  onSubmit: handleSubmit,
  initialValues = defaultValues,
  ...props
}: BookFormModalProps): JSX.Element => {
  const { t } = useTranslation()

  const {
    handleSubmit: handleFormSubmit,
    handleChange,
    setFieldValue,
    setValues,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: bookFormSchema,
  })

  const handleChangeDate = (targetDate: MaterialUiPickersDate) => {
    if (targetDate) {
      setFieldValue('publicationDate', targetDate)
    }
  }

  useEffect(() => {
    if (initialValues) {
      setValues(initialValues)
    } else {
      setValues(defaultValues)
    }
  }, [initialValues, setValues])

  const serialNumberHelperText = useMemo(() => (
    touched.serialNumber && !!errors.serialNumber ? (
      t(errors.serialNumber as string)
    ) : (t('screen.manageBooks.serialNumberHelper'))
  ), [errors.serialNumber, t, touched.serialNumber])

  return (
    <Modal onClose={handleClose} {...props}>
      <Modal.Title>
        {t('screen.manageBooks.addOrEditBook')}
      </Modal.Title>
      <Styled.ModalContent>
        <Styled.Form autoComplete="off" onSubmit={handleFormSubmit}>
          <Styled.TextField
            id="serialNumber"
            value={values.serialNumber}
            error={touched.serialNumber && !!errors.serialNumber}
            helperText={serialNumberHelperText}
            onChange={handleChange}
            required
            type="number"
            label={t('screen.manageBooks.serialNumber')}
            variant="outlined"
            disabled={mode === 'EDIT'}
            InputProps={{
              inputProps: {
                min: 0
              }
            }}
          />
          <Styled.TextField
            id="title"
            value={values.title}
            error={touched.title && !!errors.title}
            helperText={touched.title && t(errors.title as string)}
            onChange={handleChange}
            required
            label={t('screen.manageBooks.title')}
            variant="outlined"
          />
          <Styled.TextField
            id="author"
            value={values.author}
            error={touched.author && !!errors.author}
            helperText={touched.author && t(errors.author as string)}
            onChange={handleChange}
            required
            label={t('screen.manageBooks.author')}
            variant="outlined"
          />
          <Styled.DatePicker
            value={values.publicationDate}
            error={touched.publicationDate && !!errors.publicationDate}
            helperText={touched.publicationDate && t(errors.publicationDate as string)}
            onChange={handleChangeDate}
            inputVariant="outlined"
            label={t('screen.manageBooks.publicationDate')}
          />
          <Styled.TextField
            id="publisher"
            value={values.publisher}
            error={touched.publisher && !!errors.publisher}
            helperText={touched.publisher && t(errors.publisher as string)}
            onChange={handleChange}
            label={t('screen.manageBooks.publisher')}
            variant="outlined"
          />
          <Styled.TextField
            id="description"
            value={values.description}
            error={touched.description && !!errors.description}
            helperText={touched.description && t(errors.description as string)}
            onChange={handleChange}
            required
            label={t('screen.manageBooks.description')}
            variant="outlined"
            multiline
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

export { BookFormModal }
export type { BookFormFields, BookModalMode }
