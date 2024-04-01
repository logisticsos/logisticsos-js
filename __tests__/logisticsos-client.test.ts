import { logisticsosClient } from "./mod.ts";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";

const env = await load();
const api_key_solver = env["LOS_TEST_API_KEY"];

const solverVrpExampleData = await import("./__tests__/fixtures/vrp-1.json", {
  with: { type: "json" },
});
const solverOndemandExampleData = await import("./__tests__/fixtures/ondemand-1.json", {
  with: { type: "json" },
});
const solverOTspExampleData = await import("./__tests__/fixtures/tsp-1.json", {
  with: { type: "json" },
});

describe("logisticsosClient", () => {
  it("return expected string", async () => {
    const result = await logisticsosClient("hello", data1, "vrp");
    console.log(result, "result logisticsosClient")
    expect(result).toEqual("logisticsosClient: hello");
    const initLogisticsos = await logisticsosClient(api_key_solver);
    const optimizationRes = await initLogisticsos.optimize(
      solverOTspExampleData.default,
      "tsp"
    );
    const optimizationRes = await initLogisticsos.optimize(
      solverOndemandExampleData.default,
      "ondemand"
    );
    const optimizationRes = await initLogisticsos.optimize(
      solverVrpExampleData.default,
      "vrp"
    );
  });
});
