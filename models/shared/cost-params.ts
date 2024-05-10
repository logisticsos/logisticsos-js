import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from "../../types/solver-types-v3.d.ts";

type ICostParamsVrp = typeV3new.components["schemas"]["CostParamsVrp"];
type ICostParamsOnDemand =
  typeV3new.components["schemas"]["CostParamsOnDemand"];

export const costParamsVrpSchema: yup.ObjectSchema<ICostParamsVrp> = yup
  .object()
  .shape({
    cost_per_order: yup.number().min(0),
    cost_per_unit_time: yup.number(),
    cost_per_unit_distance: yup.number().min(0),
    cost_per_unit_overtime: yup.number().min(0),
    cost_per_unit_overdistance: yup.number().min(0),
    duration_step_costs: yup.array(yup.number()),
    fixed_cost: yup.number().min(0),
    overtime_start: yup.number(),
    overorder_start: yup.number(),
    cost_per_overorder: yup.number(),
    cost_per_unit_quantity: yup.number(),
    distance_step_costs: yup.array().of(
      yup.lazy((item) => {
        // TODO: verify this;
        return item;
      })
    ),
    overdistance_start: yup.number(),
  });

export const costParamsOndemandSchema: yup.ObjectSchema<ICostParamsOnDemand> =
  costParamsVrpSchema.concat(
    yup.object().shape({
      cost_per_unit_overdistance: yup.number().min(0).strip(),
      cost_per_unit_late_time: yup.number().min(0),
    })
  );
