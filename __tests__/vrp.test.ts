import { schemaVrp } from '../src/models/vrp.yup.ts';
import data1 from "../fixtures/vrp-1.json";

describe('VRP', () => {
    it('simple payload + paired_orders + service + time_window.start + multiple vehicle types', async () => {
        const valid_vrp = await schemaVrp.validate(data1);
        expect(valid_vrp).toEqual(data1);
    });
});


export {};