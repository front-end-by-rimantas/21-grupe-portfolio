import { hobbies } from './hobbies.js';

describe('Testai su negiamu rezultatu', () => {
    test('neduota parametru', () => {
        expect(hobbies()).toBeFalsy();
    });

    test('duotas netinkamo tipo parametras: skaicius', () => {
        expect(hobbies(5)).toBeFalsy();
    });
})