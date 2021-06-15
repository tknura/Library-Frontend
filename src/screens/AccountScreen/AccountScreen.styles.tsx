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

export {
  RootContainer
}
