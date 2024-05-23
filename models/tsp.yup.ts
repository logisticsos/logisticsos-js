import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../types/solver-types-v3.d.ts';
import { orderTSPScheme } from "./shared/order.ts";
import depotSchema from "./shared/depot.ts";
import breakSchema from "./shared/break.ts";
import { vehicleTSPSchema } from "./shared/vehicle-type.ts";
import { solverParametersSchema } from "./shared/solver-parameters.ts";
import unitsSchema from "./shared/unit.ts";
import { renewalSchema } from "./shared/renewal-params.ts";

type ITspRequest = typeV3new.components["schemas"]["TspRequest"];

export const schemaTSP: yup.ObjectSchema<ITspRequest> = yup.object({
    orders: yup.array().of(orderTSPScheme.required()).required(),
    vehicle: vehicleTSPSchema,
    start_depot: depotSchema.default(undefined),
    end_depot: depotSchema.default(undefined),
    breaks: yup.array().of(breakSchema),
    units: unitsSchema.required(),
    renewals: yup.array().of(renewalSchema.required()),
    solver_parameters: solverParametersSchema.optional(),
    user_tags: yup.array().of(yup.string().required()).optional(),
    routing_profile: yup.object({
        name: yup.string().required(),
        base_profile: yup.string().required(),
        average_speed: yup.number(),
        speed_factor: yup.number()
    }).optional()
});

