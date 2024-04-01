import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';
import { timeWindowSchema } from "./time-window.ts";
import geometrySchema from "./geometry.ts";

type IDepot = typeV3new.components["schemas"]["Depot"];

const depotSchema: yup.ObjectSchema<IDepot> = yup.object({
  id: yup.string().required(),
  geometry: geometrySchema,
  service_duration: yup.number().required(),
  time_window: timeWindowSchema,
});

export default depotSchema;
  