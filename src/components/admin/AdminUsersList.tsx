import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ListProps
} from 'react-admin'

const AdminUsersList = (props: ListProps): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
)

export { AdminUsersList }
