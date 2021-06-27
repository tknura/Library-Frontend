import * as yup from 'yup'

export const deliveryFormSchema = yup.object().shape({
  expectedDeliveryDate: yup
    .date()
    .required('screens.manageDeliveries.errors.expectedDeliveryDate'),
})
