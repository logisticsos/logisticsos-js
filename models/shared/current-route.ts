import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';
import { vehicleSchemaOndemand } from "./vehicle-type.ts";
import { currentRouteStopSchema } from "./current-route-stop.ts";
import { currentRouteBreakOldSchema } from "./break.ts";

type ICurrentRoute = typeV3new.components["schemas"]["CurrentRoute"];

export const currentRouteSchema: yup.ObjectSchema<ICurrentRoute> = yup.object({
  vehicle: vehicleSchemaOndemand.required(),
  stops: yup.array().of(
    yup.lazy((value: any) => {
      if ('break' in value) {
        return currentRouteBreakOldSchema.required();
      } else {
        return currentRouteStopSchema.required();
      }

    })
  ).required(),
  lock_first_n_orders: yup.number(),
  max_incremental_distance: yup.number(),
  is_reducible: yup.boolean()
});

  