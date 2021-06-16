import { TypographyProps } from '@material-ui/core'
import * as Styled from './ModalTitle.styles'

const ModalTitle = ({
  children,
  ...props
}: TypographyProps): JSX.Element => (
  <Styled.Title variant="h5" {...props}>
    {children}
  </Styled.Title>
)

export { ModalTitle }
