import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'

import { Modal } from 'components/utillity/Modal/Modal'
import * as Styled from './ConfirmReservationDialog.styles'

interface ConfirmReservationModalProps {
  open: boolean,
  missingBooks?: string | null,
  onConfirm: () => void,
  onCancel: () => void
}

const ConfirmReservationModal = ({
  open,
  missingBooks,
  onConfirm: handleConfirm,
  onCancel: handleCancel
}: ConfirmReservationModalProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Modal
      open={open}
      onClose={handleCancel}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Modal.Title>
        {t('screen.cartConfirmationModal.title')}
      </Modal.Title>
      <Modal.Content>
        <Styled.ModalDataContainer>
          <Typography>
            {missingBooks
              ? t('screen.cartConfirmationModal.itemsMissing')
              : t('screen.cartConfirmationModal.orderIsComplete')}
          </Typography>
          {!!missingBooks && <Typography>{missingBooks}</Typography>}
        </Styled.ModalDataContainer>
      </Modal.Content>
      <Modal.Actions
        onCancel={handleCancel}
        onSave={handleConfirm}
      />
    </Modal>
  )
}

export { ConfirmReservationModal }
