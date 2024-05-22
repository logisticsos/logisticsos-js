import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';
import geometrySchema from "./geometry.ts";


export const renewalSchema = yup.object().shape({
    id: yup.string().required(),
    geometry: geometrySchema.required(),
    duration: yup.number(),
  });

export const renewalParamsTravelSchema = yup.object().shape({
    capacity: yup.number().required(),
    consumption_per_unit_distance: yup.number(),
    consumption_per_unit_duration: yup.number(),
  });
  
  export const renewalParamsServiceSchema = yup.object().shape({
    capacity: yup.number().required(),
    consumption_per_order: yup.number()
  });