import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
  SelectProps as MuiSelectProps
} from '@material-ui/core'

interface SelectProps extends MuiSelectProps {
  helperText?: string
  label?: string
}

const Select = ({
  children,
  helperText,
  label,
  className,
  ...props
}: SelectProps): JSX.Element => (
  <FormControl className={className}>
    <InputLabel>{label}</InputLabel>
    <MuiSelect {...props}>
      {children}
    </MuiSelect>
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
)

export { Select }
export type { SelectProps }
