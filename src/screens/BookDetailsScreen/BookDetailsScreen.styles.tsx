import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 15px;
  margin: 15px 25px;
`

const PictureContainer = styled.div`
  flex: 1;
  padding: 10px 15px;
  margin: 5px 25px;
`

const Loading = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -75px;
`

export {
  DetailsContainer,
  PictureContainer,
  Loading,
}
