import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';

type IUnits = typeV3new.components["schemas"]["Units"];

const unitsSchema: yup.ObjectSchema<IUnits> = yup.object().shape({
  distance: yup
      .mixed<"meter" | "kilometer" | "mile">()
      .oneOf(["meter" , "kilometer" , "mile"])
      .default("kilometer").required(),
  duration: yup
      .mixed<"second" | "minute" | "hour">()
      .oneOf(["second" , "minute" , "hour"])
      .default("minute").required(),
});

export default unitsSchema;
  