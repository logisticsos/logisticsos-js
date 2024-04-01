import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';

import { costParamsOndemandSchema, costParamsVrpSchema } from "./cost-params.ts";

type IVehicleOnDemand = typeV3new.components["schemas"]["VehicleOnDemand"];
type IVehicleVrp = typeV3new.components["schemas"]["VehicleType"];

export const vehicleTypeSchema: yup.ObjectSchema<IVehicleVrp> = yup.object().shape({
  id: yup.string().required(),
  profile: yup.string(),
  count: yup.number().positive(),
  capacity: yup.lazy((value: any) => {
    if (Array.isArray(value)) {
      return yup.array().of(yup.number().required());
    } else {
      return yup.number().min(0);
    }
  }),
  dispatch_after: yup.number().min(0),
  dismiss_before: yup.number().positive(),
  max_distance: yup.number().positive(),
  max_travel_time: yup.number().positive(),
  max_total_time: yup.number().positive(),
  max_late_time: yup.number().min(0),
  max_wait_time: yup.number().positive(),
  max_orders_per_route: yup.number().positive(),
  avoid_wait_time: yup.boolean(),
  start_depot: yup.string(),
  end_depot: yup.string(),
  break_ids: yup.array().of(yup.string().required()),
  cost_params: costParamsVrpSchema.optional(),
  use_all_vehicles: yup.boolean(),
  parking_time: yup.number().positive(),
  max_pickup_quantities: yup.number(),
  max_dropoff_quantities: yup.number(),
  max_waypoints_per_route: yup.number().positive(),
  multi_dispatch: yup.boolean(),
  capabilities: yup.array().of(yup.string().required()).optional(),
});

export const vehicleSchemaOndemand: yup.ObjectSchema<IVehicleOnDemand> = yup
  .object()
  .shape({
    id: yup.string().required(),
    profile: yup.string(),
    capacity: yup.lazy((value: any) => {
      if (Array.isArray(value)) {
        return yup.array().of(yup.number().required());
      } else {
        return yup.number().min(0);
      }
    }),
    cost_params: costParamsOndemandSchema,
    dispatch_after: yup.number().min(0),
    dismiss_before: yup.number().positive(),
    max_distance: yup.number().positive(),
    max_travel_time: yup.number().positive(),
    max_total_time: yup.number().positive(),
    max_late_time: yup.number().min(0),
    max_wait_time: yup.number().positive(),
    max_orders_per_route: yup.number().positive(),
    avoid_wait_time: yup.boolean(),
    use_all_vehicles: yup.boolean().strip(),
    break_ids: yup.array().of(yup.string()).strip(),
    overtime_start: yup.number().positive(),
    parking_time: yup.number().positive(),
    max_pickup_quantities: yup.number(),
    max_dropoff_quantities: yup.number(),
    max_waypoints_per_route: yup.number().positive(),
    capabilities: yup.array().of(yup.string().required()).optional(),
  });

  export const vehicleTSPSchema: yup.ObjectSchema<IVehicleVrp> = yup.object().shape({
    id: yup.string().required(),
    profile: yup.string(),
    count: yup.number().positive(),
    capacity: yup.lazy((value: any) => {
      if (Array.isArray(value)) {
        return yup.array().of(yup.number().required());
      } else {
        return yup.number().min(0);
      }
    }),
    dispatch_after: yup.number().min(0),
    dismiss_before: yup.number().positive(),
    max_distance: yup.number().positive(),
    max_travel_time: yup.number().positive(),
    max_total_time: yup.number().positive(),
    max_late_time: yup.number().min(0),
    max_wait_time: yup.number().positive(),
    max_orders_per_route: yup.number().positive(),
    avoid_wait_time: yup.boolean(),
    start_depot: yup.string(),
    end_depot: yup.string(),
    break_ids: yup.array().of(yup.string().required()),
    cost_params: costParamsVrpSchema.optional(),
    use_all_vehicles: yup.boolean(),
    parking_time: yup.number().positive(),
    max_pickup_quantities: yup.number(),
    max_dropoff_quantities: yup.number(),
    max_waypoints_per_route: yup.number().positive(),
    multi_dispatch: yup.boolean(),
    capabilities: yup.array().of(yup.string().required()).optional(),
  });

