import { logisticsosClient } from "../mod.ts";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";

const env = await load();
const api_key_solver = env["LOS_TEST_API_KEY"];

const solverVrpExampleData = await import("../examples/vrp-1.json", {
  with: { type: "json" },
});


Deno.test("Testing add", async () => {
  // const initLogisticsos = await logisticsosClient(api_key_solver);

  // console.log(initLogisticsos, "initLogisticsos");
  console.log(solverVrpExampleData, "solverVrpExampleData");
  console.log(api_key_solver, "LOS_TEST_API_KEY");
})


