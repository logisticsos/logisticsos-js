import { secondary } from "./secondary.ts";
import * as depsModules from "./deps.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";
import * as makeProcessData from "https://deno.land/x/makedata@0.0.1/main.ts";
import { logisticsosClient } from "./src/index.ts";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";
// import { schemaVrp } from "logisticsos-js/src/models/vrp.yup";
// import { solverHandlerMutation } from "./api.ts";
// import { logisticsosClient } from "./src/index.ts";
// import data1 from "../fixtures/vrp-v3/1.json";

const env = await load();
const api_key_solver = env["LOS_TEST_API_KEY"];

const solverVrpExampleData = await import("./fixtures/vrp-v3/1.json", {
  with: { type: "json" },
});
const solverOndemandExampleData = await import("./fixtures/ondemand-v3/abco-1.json", {
  with: { type: "json" },
});
const solverOTspExampleData = await import("./fixtures/tsp-v3/1.json", {
  with: { type: "json" },
});
// const env = Deno.env.toObject();
// console.log("env:", env);

(async () => {
  console.log(api_key_solver);
  // console.log(solverOndemandExampleData, "solverExampleData")
  // add initialization of logisticsosClient, with key validation;
  const initLogisticsos = await logisticsosClient(api_key_solver);
  const optimizationRes = await initLogisticsos.optimize(
    // solverOndemandExampleData.default,
    solverOTspExampleData.default,
    "tsp"
  );

  console.log(
    JSON.stringify(optimizationRes),
    "initLogisticsos",
  );
})();
// (async () => {
//   console.log(await add(1, 2));
//   console.log(depsModules, "yup");
//   console.log(makeProcessData.default, "makeProcessData.default")
//   console.log(await makeProcessData.default("https://api.sampleapis.com/beers/ale"), "Application");

//   // const result = await logisticsosClient("hello", {data1}, "vrp");
//   // const result = await logisticsosClient("hello", { hello: "hello"}, "vrp");
// })();
// Learn more at https://deno.land/manual/examples/module_metadata#concepts
// if (import.meta.main) {
//   // console.log("Add 2 + 3 =", add(2, 3));
//   console.log("Add 2 + 3 =", secondary(22, 3));
// }
