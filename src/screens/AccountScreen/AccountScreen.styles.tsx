import CircularProgress from '@material-ui/core/CircularProgress'
import styled, { css } from 'styled-components'

const RootContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
      align-items: center;
    }
  `}
`

const Loading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -75px;
`

export {
  RootContainer,
  Loading
}
