import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from "../../types/solver-types-v3.d.ts";

type IService = typeV3new.components["schemas"]["Service"];

const serviceSchema: yup.ObjectSchema<IService> = yup.object().shape({
  pickup_quantities: yup
    .lazy((value) =>
      Array.isArray(value)
        ? yup.array().of(yup.number().required("Each element must be a number"))
        : yup.number()
    )
    .optional(),
  dropoff_quantities: yup
    .lazy((value) =>
      Array.isArray(value)
        ? yup.array().of(yup.number().required("Each element must be a number"))
        : yup.number()
    )
    .optional(),
  duration: yup.number(),
  consumption: yup
    .lazy((value) =>
      Array.isArray(value)
        ? yup.array().of(yup.number().required("Each element must be a number"))
        : yup.number()
    )
    .optional(),
});

export default serviceSchema;
