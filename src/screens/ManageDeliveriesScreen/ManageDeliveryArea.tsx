import {
  TableRow,
  TableCell,
  IconButton
} from '@material-ui/core'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import { format } from 'date-fns'

import { useDeliveryQuery } from 'api/deliveries'

interface ManageDeliveriesAreaProps {
  id: number
}

const ManageDeliveriesArea = ({
  id
}: ManageDeliveriesAreaProps): JSX.Element => {
  const { data } = useDeliveryQuery(id)

  return (
    <div>
      {data?.deliveryArticles.map((row) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={data?.id}>
          <TableCell>{`${row.name}, ${row.author}`}</TableCell>
          <TableCell>{row.quantity}</TableCell>
          <TableCell>{format(data?.deliveryRequestDate, 'd.M.y')}</TableCell>
          <TableCell>{format(data?.expectedDeliveryDate, 'd.M.y')}</TableCell>
          <TableCell>
            <>
              <IconButton>
                <DeleteRoundedIcon />
              </IconButton>
              <IconButton>
                <EditRoundedIcon />
              </IconButton>
            </>
          </TableCell>
        </TableRow>
      ))}
    </div>
  )
}

export { ManageDeliveriesArea }
