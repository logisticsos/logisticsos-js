import * as yup from "https://cdn.skypack.dev/yup?dts";
import geometrySchema from "./geometry.ts";
import serviceSchema from "./service.ts";
import { timeWindowSchema } from "./time-window.ts";
import typeV3new from '../../types/solver-types-v3.d.ts';

export const orderVRPScheme : yup.ObjectSchema<
typeV3new.components["schemas"]["OrderVrp"]
> = yup.object({
  id: yup.string().required(),
  geometry: geometrySchema,
  service: serviceSchema,
  parking_time: yup.number(), 
  time_window: timeWindowSchema,
  paired_order: yup.string(),
  is_unique: yup.boolean(),
  cluster_label: yup.string(),
  mx_label: yup.string(),
  sequence_priority: yup.number(),
  assignment_priority: yup.number(),
  alternative_order: yup.string(),
  next_order: yup.string(),
  capabilities: yup.array().of(yup.string().required()),
});

export const orderOnDemandSchema: yup.ObjectSchema<
  typeV3new.components["schemas"]["OrderOnDemand"]
> = yup.object().shape({
  id: yup.string().required(),
  geometry: geometrySchema,
  service: serviceSchema,
  time_window: timeWindowSchema,
  assignment_priority: yup.number(),
  sequence_priority: yup.number(),
  paired_order: yup.string(),
  parking_time: yup.number(),
  alternative_order: yup.string(),
  next_order: yup.string(),
  cluster_label: yup.string(),
  mx_label: yup.string(),
  is_unique: yup.boolean(),
  capabilities: yup.array().of(yup.string().required()),
  disallowed_vehicles: yup.array().of(yup.string().required()),
  max_adjacent_distance: yup.number(),
});

export const orderTSPScheme: yup.ObjectSchema<
  typeV3new.components["schemas"]["OrderTsp"]
> = yup.object().shape({
  id: yup.string().required(),
  geometry: geometrySchema,
  service: serviceSchema,
  time_window: timeWindowSchema,
  assignment_priority: yup.number(),
  sequence_priority: yup.number(),
  parking_time: yup.number(),
  paired_order: yup.string(),
  alternative_order: yup.string(),
  next_order: yup.string(),
  cluster_label: yup.string(),
  mx_label: yup.string(),
  is_unique: yup.boolean(),
  capabilities: yup.array().of(yup.string().required()),
  disallowed_vehicles: yup.array().of(yup.string().required()),
  max_adjacent_distance: yup.number(),
});
