import { logisticsosClient } from "../mod.ts";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";

const env = await load({export: true});

const solverVrpExampleData = await import("../examples/optimizations/vrp-1.json", {
  with: { type: "json" },
});


Deno.test("Testing add", async () => {
  const initLogisticsos = await logisticsosClient(env.LOS_TEST_API_KEY);

})


