import styled, { css } from 'styled-components'
import {
  Button,
  Paper,
  Typography
} from '@material-ui/core'

const RootContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    
    ${theme.breakpoints.down('sm')} {
      align-items: stretch;
    }
  `}
`

const StyledPaper = styled(Paper)`
  ${({ theme }) => css`
    flex: 1;
    max-width: 500px;
    padding: 20px;
    background-color: ${theme.palette.background.default};
  `}
`

const Title = styled(Typography)`
  flex: 1;
  text-align: center;
`

const StyledHr = styled.hr`
  ${({ theme }) => css`
    margin: 35px 0;
    border-top: 1;
    border-top-style: solid;
    border-top-color: ${theme.palette.primary.main};
    border: 0;
  `}
`

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`

export {
  RootContainer,
  StyledPaper as Paper,
  Title,
  StyledHr as Hr,
  StyledButton as Button,
}
