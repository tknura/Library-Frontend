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

interface ManageDrawerProps extends DrawerProps {
  onDrawerClose: () => void
  onBookButtonClick?: () => void
  onUsersButtonClick?: () => void
}

const ManageDrawer = ({
  open,
  onDrawerClose: handleDrawerClose,
  onBookButtonClick: handleBookButtonClick,
  onUsersButtonClick: handleUsersButtonClick,
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
      </List>
    </Drawer>
  )
}

export { ManageDrawer }
