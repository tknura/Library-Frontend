import Modal from '@material-ui/core/Modal'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'

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
      <Styled.ModalContainer>
        <Typography variant="h4">
          {t('screen.cartConfirmationModal.title')}
        </Typography>
        <Styled.ModalDataContainer>
          <Typography>
            {missingBooks
              ? t('screen.cartConfirmationModal.itemsMissing')
              : t('screen.cartConfirmationModal.orderIsComplete')}
          </Typography>
          {!!missingBooks && <Typography>{missingBooks}</Typography>}
        </Styled.ModalDataContainer>
        <Styled.ModalButtonsContainer>
          <Styled.ChoiceButton
            variant="contained"
            color="primary"
            onClick={handleConfirm}
          >
            {t('screen.cartConfirmationModal.confirm')}
          </Styled.ChoiceButton>
          <Styled.ChoiceButton
            variant="contained"
            color="primary"
            onClick={handleCancel}
          >
            {t('screen.cartConfirmationModal.cancel')}
          </Styled.ChoiceButton>
        </Styled.ModalButtonsContainer>
      </Styled.ModalContainer>
    </Modal>
  )
}

export { ConfirmReservationModal }
