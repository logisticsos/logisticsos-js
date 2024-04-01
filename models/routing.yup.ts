import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../types/solver-types-v3.d.ts';

type IRoutingRequest = typeV3new.components["schemas"]["RoutingRequest"];

export const routingScheme: yup.ObjectSchema<IRoutingRequest> = yup.object({

});

