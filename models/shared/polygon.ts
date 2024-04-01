import * as yup from "https://cdn.skypack.dev/yup?dts";
import geometrySchema from "./geometry.ts";
import typeV3new from '../../types/solver-types-v3.d.ts';

type IPolygonRestriction = typeV3new.components["schemas"]["PolygonRestriction"];

export const poloygonSchema: yup.ObjectSchema<IPolygonRestriction> = yup.object({
  id: yup.string().required(),
  geometries: yup.array(geometrySchema)
});

export default poloygonSchema;
  