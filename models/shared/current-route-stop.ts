import * as yup from "https://cdn.skypack.dev/yup?dts";
import { orderOnDemandSchema} from './order.ts'

export const currentRouteStopSchema = orderOnDemandSchema.shape({
  type: yup.mixed().oneOf(['order', 'start_depot', 'end_depot', 'break']).required(),
  lock_vehicle: yup.boolean().optional(),
});
