import { hobbies } from './hobbies.js';

describe('Tikramas parametro formatas', () => {
    test('neduota parametru', () => {
        expect(hobbies()).toBe('Neduoti parametrai');
    });

    test('duotas netinkamo tipo parametras: skaicius', () => {
        expect(hobbies(5)).toBe('Duotas netinkamo tipo parametras');
    });
    test('duotas netinkamo tipo parametras: array', () => {
        expect(hobbies([])).toBe('Duotas netinkamo tipo parametras');
    });
});

describe('Parametro raktazodziu formatas', () => {
    test('tuscias objektas yra negalimas', () => {
        expect(hobbies({})).toBe('Parametre yra netinkamas raktazodziu kiekis');
    });
    test('nepakanka objekte raktazodziu', () => {
        expect(hobbies({ selector: '#hobbies' })).toBe(
            'Parametre yra netinkamas raktazodziu kiekis'
        );
    });
    test('objektas sudarytas is netinkamu raktazodziu', () => {
        expect(hobbies({ selector: '#hobbies', school: 'name' })).toBe(
            'Parametro struktura neteisinga'
        );
    });
    test('objektas sudarytas is netinkamu raktazodziu', () => {
        expect(
            hobbies({ selector: '#hobbies', list: [], school: 'name' })
        ).toBe('Parametre yra netinkamas raktazodziu kiekis');
    });
    test('selectorius turi buti ne tuscias tekstas', () => {
        expect(hobbies({ selector: 5, list: [] })).toBe(
            'Selectorius netinkamo formato'
        );
    });
    test('selectorius turi buti ne tuscias tekstas', () => {
        expect(hobbies({ selector: '', list: [] })).toBe(
            'Selectorius netinkamo formato'
        );
    });
    test('list turi buti ne tuscias array', () => {
        expect(hobbies({ selector: '#hobbies', list: 5 })).toBe(
            'List netinkamo formato'
        );
    });
    test('list turi buti ne tuscias array', () => {
        expect(hobbies({ selector: '#hobbies', list: [] })).toBe(
            'List netinkamo formato'
        );
    });
});
