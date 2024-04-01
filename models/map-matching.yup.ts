import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../types/solver-types-v3.d.ts';

type IMapMatchingRequest = typeV3new.components["schemas"]["MapMatchingRequest"];

export const mapMatchingScheme: yup.ObjectSchema<IMapMatchingRequest> = yup.object({

});

