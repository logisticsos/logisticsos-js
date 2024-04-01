import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from "../types/solver-types-v3.d.ts";
import geometrySchema from "./shared/geometry.ts";

type IRoutingRequest = typeV3new.components["schemas"]["RoutingRequest"];

export const routingScheme: yup.ObjectSchema<IRoutingRequest> = yup.object({
  locations: yup.array(geometrySchema.required()).required(),
  parameters: yup.object().shape({
    map_provider: yup
    .mixed<"osm" | "tomtom">()
    .oneOf(["osm", "tomtom"])
    .default("osm"),
    profile: yup.string().default(undefined),
    traffic_time: yup.string().default(undefined),
    snap_distance: yup.number().default(undefined),
    avoid_tolls: yup.boolean().default(undefined),
    alternatives: yup.number().default(undefined),
  }).default(undefined),
});
