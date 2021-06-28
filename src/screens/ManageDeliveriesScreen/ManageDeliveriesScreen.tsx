import { useState } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import AddRoundedIcon from '@material-ui/icons/AddRounded'

import { useDeliveriesQuery, useDeliveryMutation } from 'api/deliveries'
import { DeliveryFormFields, DeliveryFormModal } from 'components/forms/DeliveryFormModal/DeliveryFormModal'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { ManageDeliveriesArea } from './ManageDeliveryArea'
import * as Styled from './ManageDeliveriesScreen.styles'

const ManageDeliveriesScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  const [isQueryEnabled, setQueryEnabled] = useState<boolean>(true)
  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState<boolean>(false)
  const { data } = useDeliveriesQuery({
    onSuccess: () => setQueryEnabled(false),
    enabled: isQueryEnabled
  })

  const { mutate: addDeliveryMutate } = useDeliveryMutation({
    onSuccess: () => {
      setQueryEnabled(true)
      setDeliveryModalOpen(false)
    },
    onError: () => show({ message: t('screen.manageDeliveries.errors.addDelivery'), type: SNACKBAR_ERROR })
  })

  const handleAddButton = () => {
    setDeliveryModalOpen(true)
  }

  const handleCloseDeliveryModal = () => {
    setDeliveryModalOpen(false)
  }

  const handleDeliveryFormSubmit = (values: DeliveryFormFields) => {
    addDeliveryMutate({
      deliveryArticles: values.deliveryArticles,
      expectedDeliveryDate: values.expectedDeliveryDate.toISOString()
    })
  }

  return (
    <Styled.RootContainer>
      <Styled.ActionsContainer>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddRoundedIcon />}
          onClick={handleAddButton}
        >
          {t('common.add')}
        </Button>
      </Styled.ActionsContainer>
      <Styled.Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>{t('screen.manageDeliveries.deliveryArticle')}</TableCell>
                <TableCell>{t('screen.manageDeliveries.quantity')}</TableCell>
                <TableCell>{t('screen.manageDeliveries.requestDate')}</TableCell>
                <TableCell>{t('screen.manageDeliveries.expectedDelivery')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(row => (
                <ManageDeliveriesArea
                  key={row.id}
                  id={row.id}
                />
              ))}
            </TableBody>
          </Table>
          {!data?.length && (
            <Styled.NoDataContainer>
              <Typography color="primary">
                {t('screen.manageDeliveries.empty')}
              </Typography>
            </Styled.NoDataContainer>
          )}
        </TableContainer>
      </Styled.Paper>
      <DeliveryFormModal
        open={isDeliveryModalOpen}
        onClose={handleCloseDeliveryModal}
        onSubmit={handleDeliveryFormSubmit}
      />
    </Styled.RootContainer>
  )
}

export { ManageDeliveriesScreen }
