import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../types/solver-types-v3.d.ts';
import { orderTSPScheme } from "./shared/order.ts";
import depotSchema from "./shared/depot.ts";
import breakSchema from "./shared/break.ts";
import { vehicleTSPSchema } from "./shared/vehicle-type.ts";
import { solverParametersSchema } from "./shared/solver-parameters.ts";
import unitsSchema from "./shared/unit.ts";

type ITspRequest = typeV3new.components["schemas"]["TspRequest"];

export const schemaTSP: yup.ObjectSchema<ITspRequest> = yup.object({
    orders: yup.array().of(orderTSPScheme.required()).required(),
    vehicle: vehicleTSPSchema,
    start_depot: depotSchema.default(undefined),
    end_depot: depotSchema.default(undefined),
    breaks: yup.array().of(breakSchema),
    units: unitsSchema.required(),
    solver_parameters: solverParametersSchema.optional(),
    user_tags: yup.array().of(yup.string().required()).optional()
});

