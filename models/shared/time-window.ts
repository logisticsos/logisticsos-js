import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';

type ITimeWindow = typeV3new.components["schemas"]["TimeWindow"];

const timeWindowSchema: yup.ObjectSchema<ITimeWindow> = yup.object().shape({
  start: yup.number(),
  end: yup.number(),
});

export { timeWindowSchema };
