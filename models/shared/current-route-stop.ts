import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';
import { orderOnDemandSchema} from './order.ts'

type ICurrentRouteStop = typeV3new.components["schemas"]["CurrentRouteStop"];

export const currentRouteStopSchema: yup.ObjectSchema<ICurrentRouteStop> = orderOnDemandSchema.shape({
  type: yup
  .mixed<"order" | "start_depot" | "end_depot">()
  .oneOf(["order", "start_depot", "end_depot"]).required(),
  lock_vehicle: yup.boolean().optional(),
});
