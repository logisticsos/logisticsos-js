import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';

type IBreak = typeV3new.components["schemas"]["Break"];

export const breakSchema: yup.ObjectSchema<IBreak> = yup.object().shape({
  id: yup.string().required(),
  time_window: yup.object().shape({
    start: yup.number().required(),
    end: yup.number().required(),
  }).required(),
  duration: yup.number().required(),
});

export const currentRouteBreakSchema: yup.ObjectSchema<IBreak> = yup.object().shape({
  id: yup.string().required(),
  time_window: yup.object().shape({
    start: yup.number().required(),
    end: yup.number().required(),
  }).required(),
  duration: yup.number().required(),
});


export default breakSchema;
