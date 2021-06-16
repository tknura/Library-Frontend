import { useMemo, useState } from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'

import { useUsersQuery } from 'api/users'
import { useSignUpUserMutation } from 'api/auth'
import { UserFormFields, UserFormModal } from 'components/forms/UserFormModal/UserFormModal'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { UserRole } from 'types/UserRole'
import { usersColumns } from './ManageUsersScreen.constants'
import * as Styled from './ManageUsersScreen.styles'

interface User {
  [key: string]: string | number | UserRole
  id: number
  email: string
  username: string
  firstName: string
  lastName: string
  roles: UserRole
}

const ManageUsersScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  const [isUserModalOpen, setUserModalOpen] = useState<boolean>(false)
  const [userFormInitialValues, setBookFormInitialValues] = useState<UserFormFields | null>(null)
  const [isQueryEnabled, setQueryEnabled] = useState<boolean>(true)

  const { mutate: addUserMutate } = useSignUpUserMutation({
    onSuccess: () => {
      setQueryEnabled(true)
      setUserModalOpen(false)
    },
    onError: () => show({ message: t('screen.manageUsers.errors.addUser'), type: SNACKBAR_ERROR })
  })
  const { data } = useUsersQuery({
    onSuccess: () => setQueryEnabled(false),
    enabled: isQueryEnabled
  })

  const users: User[] = useMemo(() => (
    data?.users.map(user => ({
      id: user.id,
      email: user.accountCredentialsDTO.emailAddress,
      username: user.accountCredentialsDTO.username,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      roles: user.accountPermissionsDTO.roles.map(role => role.roleName)[0] as UserRole,
    })) || []
  ), [data?.users])

  const handleAddButton = () => {
    setBookFormInitialValues(null)
    setUserModalOpen(true)
  }

  const handleEditButton = (user: typeof users[0]) => {
    setBookFormInitialValues({
      ...user,
      password: '',
      repeatPassword: '',
    })
    setUserModalOpen(true)
  }

  const handleCloseUserModal = () => {
    setUserModalOpen(false)
  }

  const handleUserFormSubmit = async ({ repeatPassword, roles, ...values }: UserFormFields) => {
    await addUserMutate({
      ...values,
      // roles: [roles]
    })
  }

  return (
    <Styled.RootContainer>
      <Styled.ActionsContainer>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddRoundedIcon />}
          onClick={handleAddButton}
        >
          {t('common.add')}
        </Button>
      </Styled.ActionsContainer>
      <Styled.Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {usersColumns.map(column => (
                  <TableCell
                    key={column.id}
                    align="left"
                    style={{ maxWidth: column.maxWidth }}
                  >
                    {t(column.labeli18nCode)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {usersColumns.map(column => (
                    <TableCell key={column.id} align="left">
                      {column.id === 'actions' ? (
                        <>
                          <IconButton disabled onClick={() => handleEditButton(row)}>
                            <EditRoundedIcon />
                          </IconButton>
                        </>
                      ) : (
                        row[column.id] || '-'
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {data?.users.length && (
            <Styled.NoDataContainer>
              <Typography color="primary">
                {t('screen.manageBooks.empty')}
              </Typography>
            </Styled.NoDataContainer>
          )}
        </TableContainer>
      </Styled.Paper>
      <UserFormModal
        open={isUserModalOpen}
        onClose={handleCloseUserModal}
        onSubmit={handleUserFormSubmit}
        initialValues={userFormInitialValues !== null ? userFormInitialValues : undefined}
      />
    </Styled.RootContainer>
  )
}

export { ManageUsersScreen }
