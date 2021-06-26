import * as yup from 'yup'

export const deliveryFormSchema = yup.object().shape({
  // amount: yup
  //   .number()
  //   .min(1, 'screen.manageDeliveries.errors.amount.min')
  //   .required('screen.manageDeliveries.errors.amount.required'),
  // articleDetailId: yup
  //   .number()
  //   .min(1, 'screen.manageDeliveries.errors.articleDetailId.min')
  //   .required('screen.manageDeliveries.errors.articleDetailId.required'),
  // expectedDeliveryDate: yup
  //   .date()
  //   .required('screens.manageDeliveries.errors.expectedDeliveryDate'),
})
