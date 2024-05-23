import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from "../../types/solver-types-v3.d.ts";

import {
  costParamsOndemandSchema,
  costParamsVrpSchema,
} from "./cost-params.ts";
import {
  renewalParamsTravelSchema,
  renewalParamsServiceSchema,
} from "./renewal-params.ts";
type IVehicleOnDemand = typeV3new.components["schemas"]["VehicleOnDemand"];
type IVehicleVrp = typeV3new.components["schemas"]["VehicleType"];
type IVehicleTsp = typeV3new.components["schemas"]["VehicleTsp"];

const baseVehicleSchema = yup.object().shape({
  id: yup.string().required(),
  profile: yup.string(),
  capacity: yup.lazy((value) => {
    if (Array.isArray(value)) {
      return yup.array().of(yup.number().required());
    } else {
      return yup.number().min(0);
    }
  }),
  cost_params: yup.mixed().optional(),
  dispatch_after: yup.number().min(0),
  dismiss_before: yup.number().positive(),
  max_distance: yup.number().positive(),
  max_travel_time: yup.number().positive(),
  max_total_time: yup.number().positive(),
  max_late_time: yup.number().min(0),
  max_wait_time: yup.number().positive(),
  max_orders_per_route: yup.number().positive(),
  avoid_wait_time: yup.boolean(),
  use_all_vehicles: yup.boolean(),
  parking_time: yup.number().positive(),
  max_pickup_quantities: yup.number(),
  max_dropoff_quantities: yup.number(),
  max_waypoints_per_route: yup.number().positive(),
  capabilities: yup.array().of(yup.string().required()).optional(),
  speed_factor: yup.number(),
  average_speed: yup.number(),
  min_orders_per_route: yup.number().default(0),
  allowed_polygons: yup.array().of(yup.string().required()),
  disallowed_polygons: yup.array().of(yup.string().required()),
  renewal_params: yup
    .lazy((value) => {
      if (
        value &&
        (value.hasOwnProperty("consumption_per_unit_distance") ||
          value.hasOwnProperty("consumption_per_unit_duration"))
      ) {
        return renewalParamsTravelSchema;
      } else {
        return renewalParamsServiceSchema;
      }
    })
    .optional(),
});

export const vehicleTypeSchema: yup.ObjectSchema<IVehicleVrp> =
  baseVehicleSchema.shape({
    count: yup.number().positive(),
    start_depot: yup.string(),
    end_depot: yup.string(),
    break_ids: yup.array().of(yup.string().required()),
    cost_params: costParamsVrpSchema.optional(),
    multi_dispatch: yup.boolean(),
  });

export const vehicleSchemaOndemand: yup.ObjectSchema<IVehicleOnDemand> =
  baseVehicleSchema.shape({
    cost_params: costParamsOndemandSchema,
    overtime_start: yup.number().positive(),
  });

export const vehicleTSPSchema: yup.ObjectSchema<IVehicleTsp> =
  baseVehicleSchema.shape({
    count: yup.number().positive(),
    start_depot: yup.string(),
    end_depot: yup.string(),
    break_ids: yup.array().of(yup.string().required()),
    cost_params: costParamsVrpSchema.optional(),
    multi_dispatch: yup.boolean(),
  });
