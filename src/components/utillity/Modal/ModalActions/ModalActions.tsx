import { useTranslation } from 'react-i18next'
import * as Styled from './ModalActions.styles'

interface ModalActionsProps {
  onCancel: () => void
  onSave: () => void
}

const ModalActions = ({
  onCancel: handleCancel,
  onSave: handleSave,
}: ModalActionsProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <Styled.ActionsContainer>
      <Styled.CancelButton
        variant="outlined"
        onClick={handleCancel}
        color="secondary"
      >
        {t('common.cancel')}
      </Styled.CancelButton>
      <Styled.SaveButton
        variant="contained"
        color="secondary"
        onClick={handleSave}
      >
        {t('common.save')}
      </Styled.SaveButton>
    </Styled.ActionsContainer>
  )
}

export { ModalActions }
