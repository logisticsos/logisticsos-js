import { schemaTSP } from '../src/models/tsp.yup';
import data1 from "../fixtures/tsp-v3/1.json";

describe('Validate VRP Payloads', () => {
    it('simple payload + paired_orders + service + time_window.start + multiple vehicle types', async () => {
        const valid_vrp = await schemaTSP.validate(data1);
        // console.log(valid_vrp, 'valid_vrp');
        expect(valid_vrp).toEqual(data1);
      
    });
});


export {};