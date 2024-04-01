import { schemaTSP } from '../src/models/tsp.yup.ts';
import data1 from "../fixtures/tsp-1.json";

describe('TSP', () => {
    it('simple payload + paired_orders + service + time_window.start + multiple vehicle types', async () => {
        const valid_vrp = await schemaTSP.validate(data1);
        expect(valid_vrp).toEqual(data1);
      
    });
});


export {};