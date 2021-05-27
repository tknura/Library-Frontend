import styled from 'styled-components'
import { Card, CardActions, CardMedia, Fab, Typography } from '@material-ui/core'

const StyledCard = styled(Card)`
  position: relative;
  min-width: 345;
`

const StyledCardMedia = styled(CardMedia)`
  height: 140;
  padding-top: 80%;
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

interface StockTextProps {
  $color: string;
}

const StockText = styled(Typography)`
  position: absolute;
  top: 5px;
  right: 10px;
  background-color: ${({ $color }: StockTextProps) => $color};
`

export {
  StyledCard as Card,
  StyledCardMedia as CardMedia,
  ContentContainer,
  StyledCardActions as CardActions,
  StyledFab as Fab,
  StockText
}
