import { MenuItem } from '@material-ui/core'
import { Select, SelectProps } from 'components/inputs/Select'
import { CLIENT_ROLE, EMPLOYEE_ROLE, MANAGER_ROLE } from 'constants/userRoles'
import { useTranslation } from 'react-i18next'

const RoleSelect = (props: SelectProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Select {...props}>
      <MenuItem disabled value={CLIENT_ROLE}>
        {t(`roles.${[CLIENT_ROLE]}`)}
      </MenuItem>
      <MenuItem value={EMPLOYEE_ROLE}>
        {t(`roles.${[EMPLOYEE_ROLE]}`)}
      </MenuItem>
      <MenuItem value={MANAGER_ROLE}>
        {t(`roles.${[MANAGER_ROLE]}`)}
      </MenuItem>
    </Select>
  )
}

export { RoleSelect }
