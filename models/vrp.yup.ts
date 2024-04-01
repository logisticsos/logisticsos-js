import * as yup from "https://cdn.skypack.dev/yup?dts";
import unitsSchema from "./shared/unit.ts";
import { solverParametersVrpSchema } from "./shared/solver-parameters.ts";
import { vehicleTypeSchema } from './shared/vehicle-type.ts';
import breakSchema from './shared/break.ts';
import depotSchema from './shared/depot.ts';
import {orderVRPScheme} from './shared/order.ts';
import poloygonSchema from './shared/polygon.ts';
import typeV3new from '../types/solver-types-v3.d.ts';

type IVehicleVrp = typeV3new.components['schemas']['VrpRequest'];

export const schemaVrp: yup.ObjectSchema<IVehicleVrp> = yup.object({
  orders: yup.array().of(orderVRPScheme.required()).required(),
  start_depots: yup.array().of(depotSchema.required()),
  end_depots: yup.array().of(depotSchema.required()),
  breaks: yup.array().of(breakSchema.required()),
  vehicle_types: yup.array().of(vehicleTypeSchema).required(),
  units: unitsSchema.required(),
  solver_parameters: solverParametersVrpSchema,
  polygons: yup.array(poloygonSchema),
  od_location: yup.string(),
  od_data_type: yup
  .mixed<"binary" | "json">()
  .oneOf(["binary", "json"])
  .default("binary").strip(),
  user_tags: yup.array().of(yup.string().required())
}).noUnknown();