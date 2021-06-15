import { ReactNode } from 'react'
import { ModalProps as MuiModalProps } from '@material-ui/core/Modal'
import { Fade, Backdrop } from '@material-ui/core'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'

import { ModalTitle } from './ModalTitle/ModalTitle'
import { ModalActions } from './ModalActions/ModalActions'
import { ModalContent } from './ModalContent/ModalContent'
import * as Styled from './Modal.styles'

interface ModalProps extends Omit<MuiModalProps, 'children'> {
  children: ReactNode
  className?: string
}

const Modal = ({
  open,
  onClose: handleClose = () => null,
  children,
  className,
  ...props
}: ModalProps): JSX.Element => (
  <Styled.MuiModal
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
    }}
    className={className}
    {...props}
  >
    <Fade in={open}>
      <Styled.Paper>
        <Styled.CloseButton onClick={() => handleClose({}, 'backdropClick')} size="medium">
          <CloseRoundedIcon fontSize="small" />
        </Styled.CloseButton>
        <>
          {children}
        </>
      </Styled.Paper>
    </Fade>
  </Styled.MuiModal>
)

Modal.Title = ModalTitle
Modal.Content = ModalContent
Modal.Actions = ModalActions

export type { ModalProps }
export { Modal }
