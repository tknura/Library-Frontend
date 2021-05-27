import styled from 'styled-components'
import { Button } from '@material-ui/core'

const ReserveButton = styled(Button)`
  position: absolute;
  top: 50%;
  left:50%;
  width: 200px;
  height: 40px;
  margin-left: -100px;
  margin-top: -20px;
  font-size: 1rem;
`

const BookScreenFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 70px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.accents.main};
  
`

export { BookScreenFooter, ReserveButton }
