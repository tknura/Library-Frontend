import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
import { IconButton, Paper } from '@material-ui/core'

const MuiModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledPaper = styled(Paper)`
  position: relative;
  min-width: 300px;
  min-height: 65px;
`

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`

export {
  MuiModal,
  StyledPaper as Paper,
  CloseButton,
}
