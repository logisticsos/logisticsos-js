import { schemaVrp } from '../src/models/vrp.yup';
import data1 from "../fixtures/vrp-v3/1.json";

describe('Validate VRP Payloads', () => {
    it('simple payload + paired_orders + service + time_window.start + multiple vehicle types', async () => {
        const valid_vrp = await schemaVrp.validate(data1);

        expect(valid_vrp).toEqual(data1);
    });
});


export {};