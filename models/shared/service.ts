import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';

type IService = typeV3new.components["schemas"]["Service"];

const serviceSchema: yup.ObjectSchema<IService> = yup.object().shape({
  pickup_quantities: yup.lazy((value: any) =>
    Array.isArray(value)
      ? yup.array().of(yup.number())
      : yup.number()),
  dropoff_quantities: yup.lazy((value: any) =>
  Array.isArray(value)
    ? yup.array().of(yup.number())
    : yup.number()),
  duration: yup.number(),
});

export default serviceSchema;
  