import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  ListProps
} from 'react-admin'

const AdminBooksList = (props: ListProps): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="numberOfBooks" />
      <DateField source="numberOFOccupiedBooks" />
      <TextField source="publisher" />
      <TextField source="serialNumber" />
      <BooleanField source="isOccupied" />
    </Datagrid>
  </List>
)

export { AdminBooksList }
