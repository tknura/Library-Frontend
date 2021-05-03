import styled from 'styled-components'
import { Card, CardActions, CardMedia, Fab } from '@material-ui/core'

const StyledCard = styled(Card)`
  min-width: 345;
`

const StyledCardMedia = styled(CardMedia)`
  height: 140;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledCardActions = styled(CardActions)`
  align-items: flex-end;
`

const StyledFab = styled(Fab)`
  margin: 10px;
`

export {
  StyledCard as Card,
  StyledCardMedia as CardMedia,
  ContentContainer,
  StyledCardActions as CardActions,
  StyledFab as Fab,
}
