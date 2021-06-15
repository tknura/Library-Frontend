import {
  FormControl,
  FormHelperText,
  Select as MuiSelect,
  SelectProps as MuiSelectProps
} from '@material-ui/core'

interface SelectProps extends MuiSelectProps {
  helperText: string
}

const Select = ({
  children,
  helperText,
  ...props
}: SelectProps): JSX.Element => (
  <FormControl>
    <MuiSelect {...props}>
      {children}
    </MuiSelect>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
)

export { Select }
