import { useTranslation } from 'react-i18next'
import {
  Drawer,
  DrawerProps,
  ListItemIcon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useTheme
} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import PersonIcon from '@material-ui/icons/Person'
import DateRangeIcon from '@material-ui/icons/DateRange'

interface ManageDrawerProps extends DrawerProps {
  onDrawerClose: () => void
  onBookButtonClick?: () => void
  onUsersButtonClick?: () => void
  onReservationsButtonClick?: () => void
}

const ManageDrawer = ({
  open,
  onDrawerClose: handleDrawerClose,
  onBookButtonClick: handleBookButtonClick,
  onUsersButtonClick: handleUsersButtonClick,
  onReservationsButtonClick: handleReservationsButtonClick
}: ManageDrawerProps): JSX.Element => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <List>
        <ListItem button onClick={handleBookButtonClick}>
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary={t('navigation.manage.books')} />
        </ListItem>
        <ListItem button onClick={handleUsersButtonClick}>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary={t('navigation.manage.users')} />
        </ListItem>
        <ListItem button onClick={handleReservationsButtonClick}>
          <ListItemIcon><DateRangeIcon /></ListItemIcon>
          <ListItemText primary={t('navigation.manage.reservations')} />
        </ListItem>
      </List>
    </Drawer>
  )
}

export { ManageDrawer }
