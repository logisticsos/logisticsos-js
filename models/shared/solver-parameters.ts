import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from "../../types/solver-types-v3.d.ts";

type ISolverParamsOnDemand =
  typeV3new.components["schemas"]["SolverParamsOnDemand"];
type ISolverParamsVrp = typeV3new.components["schemas"]["SolverParamsVrp"];

const solverParametersSchema: yup.ObjectSchema<ISolverParamsOnDemand> =
  yup.object({
    map_provider: yup
      .mixed<"osm" | "tomtom">()
      .oneOf(["osm", "tomtom"])
      .default("osm"),
    traffic_time: yup.string(),
    snap_distance: yup.number(),
    search_level: yup.number(),
    exhaustive_search: yup.boolean(),
    avoid_tolls: yup.boolean(),
    soft_capabilities: yup
      .array()
      .of(yup.array().of(yup.string().required()).required()),
  });

const solverParametersVrpSchema: yup.ObjectSchema<ISolverParamsVrp> = yup
  .object()
  .shape({
    map_provider: yup
      .mixed<"osm" | "tomtom" | "here">()
      .oneOf(["osm", "tomtom", "here"])
      .default("osm"),
    traffic_type: yup
      .mixed<"historical" | "predictive">()
      .oneOf(["historical", "predictive"]),
    traffic_time: yup.string(),
    snap_distance: yup.number(),
    avoid_tolls: yup.boolean(),
    exhaustive_search: yup.boolean(),
    high_quality_cluster: yup.boolean(),
    balance_routes: yup.boolean(),
    search_level: yup.number(),
    clustering_level: yup.number(),
    renewal_type: yup
      .mixed<"travel" | "service">()
      .oneOf(["travel", "service"]),
    soft_cluster_label: yup.boolean(),
    soft_capabilities: yup
      .array()
      .of(yup.array().of(yup.string().required()).required()),
  });

export { solverParametersVrpSchema, solverParametersSchema };
