import { ReactNode } from 'react'
import * as Styled from './ModalContent.styles'

interface ModalContentProps {
  children?: ReactNode
  className?: string
}

const ModalContent = ({
  children,
  className
}: ModalContentProps): JSX.Element => (
  <Styled.ContentContainer className={className}>
    {children}
  </Styled.ContentContainer>
)

export { ModalContent }
