import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@material-ui/core/Typography'

import { useShowSnackbar } from 'components/providers/SnackbarProviders'
import { SNACKBAR_ERROR } from 'constants/snackbarTypes'
import { UserUpdate, useUpdateUserMutation } from 'api/users'
import * as Styled from './AccountDataForm.styles'

interface AccountDataFormProps {
  userData: UserUpdate
}

enum Mode { DISPLAY, EDIT }

const AccountDataForm = ({
  userData
}: AccountDataFormProps): JSX.Element => {
  const { t } = useTranslation()
  const { show } = useShowSnackbar()

  const [mode, setMode] = useState<Mode>(Mode.DISPLAY)
  const [data, setData] = useState(userData)

  const { mutate } = useUpdateUserMutation({
    onSuccess: () => {
      setMode(Mode.DISPLAY)
    },
    onError: () => show({ message: t('screen.manageBooks.errors.addBook'), type: SNACKBAR_ERROR })
  })

  const handleFieldChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [field]: e.target.value })
  }

  const handleSave = () => {
    const response = { id: data.id,
      ...Object.fromEntries(Object.entries(data).filter(field => field[1])) }
    const mutationHandler = mutate
    mutationHandler(response)
  }

  const handleCancel = () => {
    setMode(Mode.DISPLAY)
  }

  const handleEdit = () => {
    setMode(Mode.EDIT)
  }

  return (
    <Styled.AccDataContainer>
      <Typography variant="h5" gutterBottom>
        {t('screen.account.accInfo')}
      </Typography>
      <Styled.TextField
        disabled={mode === Mode.DISPLAY}
        label={t('common.email')}
        value={data.email}
        onChange={handleFieldChange('email')}
      />
      <Styled.TextField
        disabled={mode === Mode.DISPLAY}
        label={t('common.username')}
        value={data.username}
        onChange={handleFieldChange('username')}
      />
      <Styled.TextField
        disabled={mode === Mode.DISPLAY}
        label={t('common.firstName')}
        value={data.firstName}
        onChange={handleFieldChange('firstName')}
      />
      <Styled.TextField
        disabled={mode === Mode.DISPLAY}
        label={t('common.lastName')}
        value={data.lastName}
        onChange={handleFieldChange('lastName')}
      />
      <Styled.TextField
        disabled={mode === Mode.DISPLAY}
        label={t('common.password')}
        defaultValue=""
        onChange={handleFieldChange('password')}
      />
      {mode === Mode.DISPLAY
        ? (
          <Styled.Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
          >
            {t('screen.account.edit')}
          </Styled.Button>
        ) : (
          <Styled.ButtonContainer>
            <Styled.Button
              variant="contained"
              color="primary"
              onClick={handleSave}
            >
              {t('screen.account.save')}
            </Styled.Button>
            <Styled.Button
              variant="contained"
              color="primary"
              onClick={handleCancel}
            >
              {t('screen.account.cancel')}
            </Styled.Button>
          </Styled.ButtonContainer>
        )}
    </Styled.AccDataContainer>
  )
}

export { AccountDataForm }
