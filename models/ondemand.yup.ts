import * as yup from "https://cdn.skypack.dev/yup?dts";
import unitsSchema from "./shared/unit.ts";
import { poloygonSchema } from "./shared/polygon.ts";
import { solverParametersSchema } from "./shared/solver-parameters.ts";
import { orderOnDemandSchema } from "./shared/order.ts";
import  { currentRouteSchema } from './shared/current-route.ts'

export const schemaOnDemand = yup.object().shape({
  current_routes: yup.array().of(currentRouteSchema.required()).required(),
  orders: yup.array(orderOnDemandSchema.required()).required(),
  polygons: yup.array(poloygonSchema),
  solver_parameters: solverParametersSchema.required(),
  units: unitsSchema.required(),
  user_tags: yup.array(yup.string())
});
