import * as yup from "https://cdn.skypack.dev/yup?dts";
import typeV3new from '../../types/solver-types-v3.d.ts';

type IBreak = typeV3new.components["schemas"]["Break"];
type IOldBreak = typeV3new.components["schemas"]["CurrentRouteBreak"];

export const breakSchema: yup.ObjectSchema<IBreak> = yup.object().shape({
  id: yup.string().required(),
  max_working_time: yup.number(),
  time_window: yup.object().shape({
    start: yup.number().required(),
    end: yup.number().required(),
  }).required(),
  duration: yup.number().required(),
});

export const currentRouteBreakSchema: yup.ObjectSchema<IBreak> = yup.object().shape({
  id: yup.string().required(),
  max_working_time: yup.number(),
  time_window: yup.object().shape({
    start: yup.number().required(),
    end: yup.number().required(),
  }).required(),
  duration: yup.number().required(),
});

export const currentRouteBreakOldSchema: yup.ObjectSchema<IOldBreak> = yup.object().shape({
  id: yup.string().required(),
  type: yup.string().oneOf(['break'], 'The type must be a "break"').required(),
  time_window: yup.object().shape({
    start: yup.number().required(),
    end: yup.number().required(),
  }).required(),
  duration: yup.number().required(),
});


export default breakSchema;
