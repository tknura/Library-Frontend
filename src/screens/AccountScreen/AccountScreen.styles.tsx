import styled from 'styled-components'

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

export {
  RootContainer
}
