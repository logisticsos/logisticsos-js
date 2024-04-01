import { schemaVrp } from "./models/vrp.yup.ts";
import { schemaOnDemand } from "./models/ondemand.yup.ts";
import { schemaTSP } from "./models/tsp.yup.ts";
import { solverHandlerMutation } from './api.ts';

export const logisticsosClient = async (
  apiKey: string,
) => {
  if (!apiKey) {
    return {
      message: "apiKey is required!",
    };
  }

  return {
    optimize: async (data: any, apiType: string) => {
      if (!apiType) {
        return {
          message: "Not defined solver api type",
        };
      }

      if (!data) {
        return {
          message: "Not provided data",
        };
      }

      let validData = null;

      if (apiType === "vrp") {
        try {
          validData = await schemaVrp.validate(data, { strict: true });
        } catch (e) {
          console.log(e, "Error validation logisticsosClient VRP apiType");
        }
      }
      if (apiType === "ondemand") {
        try {
          validData = await schemaOnDemand.validate(data, { strict: true });
        } catch (e) {
          console.log(e, "Error validation logisticsosClient OnDemand apiType");
        }
      }
      if (apiType === "tsp") {
        try {
          validData = await schemaTSP.validate(data, { strict: true });
        } catch (e) {
          // console.log(e, "Error validation logisticsosClient OnDemand apiType");
        }
      }
      if(validData) {
        try {
          const solverResData = await solverHandlerMutation(validData, apiType, apiKey);
          return solverResData;
        } catch(e) {
          // console.log(e, "Error to make an Request to solver service")
        }
      }
      return validData;
    },
    calculateRoutes: async (apiType: string) => {
      if (apiType === "routing") {
        return {
          message: "Routing not implemented yet",
        };
      }
      if (apiType === "matrix-routing") {
        return {
          message: "Matrix-routing not implemented yet",
        };
      }
      if (apiType === "map-matching") {
        return {
          message: "Map-matching not implemented yet",
        };
      }
    },
  };
};
