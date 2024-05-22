import {
  assertEquals,
  assertMatch,
} from "https://deno.land/std@0.97.0/testing/asserts.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import {
  afterAll,
  beforeAll,
  describe,
  it,
} from "https://deno.land/std@0.222.1/testing/bdd.ts";
import { getRoutingLocations } from "../utils/solver-helpers.ts";
import { logisticsosClient } from "../mod.ts";
import { load } from "https://deno.land/std@0.221.0/dotenv/mod.ts";

const env = await load({export: true});


const apiKeyLogisticsos = env.LOS_TEST_API_KEY;
const responseSolver = await import("../examples/res-mtl-6stops-1route-126cost.json", {
  with: { type: "json" },
});

describe("End-to-end Fleet Manager First Route Plan", () => {
  let routeLocations: any[] | undefined;
  let initLogisticsos: any;

  beforeAll(async () => {
    const route = responseSolver.default.routes[0].stops;
    routeLocations = getRoutingLocations(route);
    initLogisticsos = await logisticsosClient(apiKeyLogisticsos!);
  });

  it('Get routing for 1 route', async () => {
    assertEquals("match", "match");
    console.log(initLogisticsos, "initLogisticsos")
  });
});

/**
 * - get example response
 * - extract routes, and only locations
 * - call routing api
 * - receive valid data
 */
