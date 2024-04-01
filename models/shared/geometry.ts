import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';

type IGeometry = typeV3new.components["schemas"]["Geometry"];

const geometrySchema: yup.ObjectSchema<IGeometry> = yup.object({
    lat: yup.number().required(),
    lon: yup.number().required(),
    curb: yup.boolean(),
  });
  

export default geometrySchema;
