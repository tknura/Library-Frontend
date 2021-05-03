import styled from 'styled-components'
import {
  Button,
  Paper,
  Typography
} from '@material-ui/core'

const RootContainer = styled.div`
  ${({ theme }) => `
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
  flex: 1;
  max-width: 500px;
  padding: 20px;
`

const Title = styled(Typography)`
  flex: 1;
  text-align: center;
`

const StyledHr = styled.hr`
${({ theme }) => `
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
