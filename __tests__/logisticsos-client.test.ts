import { logisticsosClient } from "..";
import data1 from "../fixtures/vrp-v3/1.json";

describe("logisticsosClient", () => {
  it("return expected string", async () => {
    const result = await logisticsosClient("hello", data1, "vrp");
    console.log(result, "result logisticsosClient")
    expect(result).toEqual("logisticsosClient: hello");
  });
});
