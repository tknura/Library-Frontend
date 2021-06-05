import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@material-ui/core'

import * as Styled from './ConfirmReservationDialog.styles'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),)

interface ConfirmReservationModalProps {
    open: boolean,
    booksMissing: boolean,
    missingBooksData?: string,
    onConfirm: () => void,
    onCancel: () => void
}

const ConfirmReservationModal = ({
  open,
  booksMissing,
  missingBooksData,
  onConfirm,
  onCancel }: ConfirmReservationModalProps): JSX.Element => {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)

  const { t } = useTranslation()

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h4">
        {t('screen.cartConfirmationModal.title')}
      </Typography>
      <Styled.ModalDataContainer>
        <Typography>
          {booksMissing
            ? t('screen.cartConfirmationModal.itemsMissing')
            : t('screen.cartConfirmationModal.orderIsComplete')}
        </Typography>
        {booksMissing
          ? <Typography>{missingBooksData}</Typography>
          : <></>}
      </Styled.ModalDataContainer>
      <Styled.ModalButtonsContainer>
        <Styled.ChoiceButton
          variant="contained"
          color="primary"
          onClick={onConfirm}
        >
          {t('screen.cartConfirmationModal.confirm')}
        </Styled.ChoiceButton>
        <Styled.ChoiceButton
          variant="contained"
          color="primary"
          onClick={onCancel}
        >
          {t('screen.cartConfirmationModal.cancel')}
        </Styled.ChoiceButton>
      </Styled.ModalButtonsContainer>
    </div>
  )

  return (
    <div>
      <Modal
        open={open}
        onClose={() => onCancel}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}

export { ConfirmReservationModal }
