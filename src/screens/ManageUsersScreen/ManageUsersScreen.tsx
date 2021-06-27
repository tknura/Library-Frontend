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
import { useQueryClient } from 'react-query'
import { useTranslation } from 'react-i18next'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'

import {
  useAddUserRoleMutation,
  useDeleteUserRoleMutation,
  useUsersQuery
} from 'api/users'
import { useSignUpUserMutation } from 'api/auth'
import { UserRoleFormFields, UserRoleFormModal } from 'components/forms/UserRoleFormModal/UserRoleFormModal'
import { UserFormFields, UserFormModal } from 'components/forms/UserFormModal/UserFormModal'
import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { UserRole } from 'types/UserRole'
import { usersColumns } from './ManageUsersScreen.constants'
import * as Styled from './ManageUsersScreen.styles'

interface User {
  [key: string]: string | number | UserRole[]
  id: number
  email: string
  username: string
  firstName: string
  lastName: string
  roles: UserRole[]
}

const ManageUsersScreen = (): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()
  const queryClient = useQueryClient()

  const [isUserModalOpen, setUserModalOpen] = useState<boolean>(false)
  const [isUserRoleModalOpen, setUserRoleModalOpen] = useState<boolean>(false)
  const [
    userRoleFormInitialValues,
    setUserRoleFormInitialValues
  ] = useState<UserRoleFormFields | null>(null)

  const { mutate: addUserMutate } = useSignUpUserMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      setUserModalOpen(false)
    },
    onError: () => show({ message: t('screen.manageUsers.errors.addUser'), type: SNACKBAR_ERROR })
  })
  const { mutate: addUserRoleMutate } = useAddUserRoleMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      setUserRoleModalOpen(false)
    },
    onError: () => show({ message: t('screen.manageUsers.errors.editUser'), type: SNACKBAR_ERROR })
  })
  const { mutate: deleteUserRoleMutate } = useDeleteUserRoleMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      setUserRoleModalOpen(false)
    },
    onError: () => show({ message: t('screen.manageUsers.errors.editUser'), type: SNACKBAR_ERROR })
  })

  const { data } = useUsersQuery()

  const users: User[] = useMemo(() => (
    data?.users.map(user => ({
      id: user.id,
      email: user.accountCredentialsDTO.emailAddress,
      username: user.accountCredentialsDTO.username,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      roles: user.accountPermissionsDTO.roles.map(role => role.roleName),
    })) || []
  ), [data?.users])

  const handleAddButton = () => {
    setUserModalOpen(true)
  }

  const handleEditButton = (user: typeof users[0]) => {
    setUserRoleFormInitialValues({
      userId: user.id,
      role: user.roles[0],
    })
    setUserRoleModalOpen(true)
  }

  const handleCloseUserModal = () => {
    setUserModalOpen(false)
  }

  const handleCloseUserRoleModal = () => {
    setUserRoleModalOpen(false)
  }

  const handleUserFormSubmit = async ({
    repeatPassword,
    password,
    roles,
    ...values
  }: UserFormFields) => {
    await addUserMutate({
      ...values,
      password,
      roles: [roles],
    })
  }

  const handleUserRoleFormSubmit = async (
    userId: number,
    role: UserRole,
    previousRole: UserRole
  ) => {
    if (previousRole !== role) {
      await deleteUserRoleMutate({
        userId,
        roleName: previousRole,
      })
      await addUserRoleMutate({
        userId,
        roleName: role,
      })
    }
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
                          <IconButton onClick={() => handleEditButton(row)}>
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
          {!data?.users.length && (
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
      />
      <UserRoleFormModal
        open={isUserRoleModalOpen}
        onClose={handleCloseUserRoleModal}
        onSubmit={handleUserRoleFormSubmit}
        initialValues={userRoleFormInitialValues || undefined}
      />
    </Styled.RootContainer>
  )
}

export { ManageUsersScreen }
