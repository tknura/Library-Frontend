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
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'

import { MANAGER_ROLE } from 'constants/userRoles'
import { RestrictedContent } from 'components/navigation/RestrictedContent/RestrictedContent'

interface ManageDrawerProps extends DrawerProps {
  onDrawerClose: () => void
  onBookButtonClick?: () => void
  onUsersButtonClick?: () => void
  onDeliveriesButtonClick?: () => void
  onManageReservationsButtonClick?: () => void
  onAllReservationsButtonClick?: () => void
}

const ManageDrawer = ({
  open,
  onDrawerClose: handleDrawerClose,
  onBookButtonClick: handleBookButtonClick,
  onUsersButtonClick: handleUsersButtonClick,
  onDeliveriesButtonClick: handleDeliveriesButtonClick,
  onManageReservationsButtonClick: handleManageReservationsButtonClick,
  onAllReservationsButtonClick: handleAllReservationsButtonClick
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
        <RestrictedContent accessRoles={[MANAGER_ROLE]}>
          <ListItem button onClick={handleUsersButtonClick}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary={t('navigation.manage.users')} />
          </ListItem>
        </RestrictedContent>
        <ListItem button onClick={handleDeliveriesButtonClick}>
          <ListItemIcon><LocalShippingIcon /></ListItemIcon>
          <ListItemText primary={t('navigation.manage.deliveries')} />
        </ListItem>
        <ListItem button onClick={handleManageReservationsButtonClick}>
          <ListItemIcon><DateRangeIcon /></ListItemIcon>
          <ListItemText primary={t('navigation.manage.manageReservations')} />
        </ListItem>
        <ListItem button onClick={handleAllReservationsButtonClick}>
          <ListItemIcon><EventAvailableIcon /></ListItemIcon>
          <ListItemText primary={t('navigation.manage.allReservations')} />
        </ListItem>
      </List>
    </Drawer>
  )
}

export { ManageDrawer }
