import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Typography from '@material-ui/core/Typography'

import * as Styled from './AccountDataForm.styles'

export interface UserData {
  email: string
  username: string
  firstName: string
  lastName: string
  password: string
}

interface AccountDataFormProps {
  userData: UserData
}

enum Mode { DISPLAY, EDIT }

const AccountDataForm = ({
  userData
}: AccountDataFormProps): JSX.Element => {
  const { t } = useTranslation()
  const [mode, setMode] = useState<Mode>(Mode.DISPLAY)
  const [data, setData] = useState(userData)

  const handleFieldChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [field]: e.target.value })
  }

  const handleSave = () => {
    setMode(Mode.DISPLAY)
  }

  const handleCancel = () => {
    setMode(Mode.DISPLAY)
  }

  const handleEdit = () => {
    setMode(Mode.EDIT)
  }

  return (
    mode === Mode.DISPLAY
      ? (
        <Styled.AccDataContainer>
          <Typography variant="h5" gutterBottom>
            {t('screen.account.accInfo')}
          </Typography>
          <Styled.TextField
            disabled
            label="E-mail"
            defaultValue={userData.email}
          />
          <Styled.TextField
            disabled
            label={t('screen.account.username')}
            defaultValue={userData.username}
          />
          <Styled.TextField
            disabled
            label={t('screen.account.firstName')}
            defaultValue={userData.firstName}
          />
          <Styled.TextField
            disabled
            label={t('screen.account.lastName')}
            defaultValue={userData.lastName}
          />
          <Styled.TextField
            disabled
            type="password"
            label={t('screen.account.password')}
            defaultValue={userData.password}
          />
          <Styled.Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
          >
            {t('screen.account.edit')}
          </Styled.Button>
        </Styled.AccDataContainer>
      )
      : (
        <Styled.AccDataContainer>
          <Typography variant="h5" gutterBottom>
            {t('screen.account.accInfo')}
          </Typography>
          <Styled.TextField
            label="E-mail"
            onChange={handleFieldChange('email')}
          />
          <Styled.TextField
            label={t('screen.account.username')}
            onChange={handleFieldChange('username')}
          />
          <Styled.TextField
            label={t('screen.account.firstName')}
            onChange={handleFieldChange('firstName')}
          />
          <Styled.TextField
            label={t('screen.account.lastName')}
            onChange={handleFieldChange('lastName')}
          />
          <Styled.TextField
            label={t('screen.account.password')}
            type="password"
            onChange={handleFieldChange('password')}
          />
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
        </Styled.AccDataContainer>
      )
  )
}

export { AccountDataForm }
