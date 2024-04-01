import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';
import { orderOnDemandSchema} from './order.ts'

export const currentRouteStopSchema = orderOnDemandSchema.shape({
  type: yup.mixed().oneOf(['order', 'start_depot', 'end_depot']).required(),
  lock_vehicle: yup.boolean().optional(),
});

