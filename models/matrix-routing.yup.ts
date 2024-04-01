import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../types/solver-types-v3.d.ts';

type IMatrixRoutingRequest = typeV3new.components["schemas"]["MatrixRoutingRequest"];

export const matrixRoutingScheme: yup.ObjectSchema<IMatrixRoutingRequest> = yup.object({

});

