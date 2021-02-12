import { age } from './age.js';

describe('Validuojamos tinkamo tipo reiksmes', () => {

    test('Jei 1990, tai uzeik', () => {
        expect(age(1990)).toBe('Uzeik');
    });

    test('Jei 2010, tai palauk', () => {
        expect(age(2010)).toBe('Palauk');
    });

})