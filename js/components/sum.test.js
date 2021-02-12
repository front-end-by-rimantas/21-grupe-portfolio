import { sum } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 0.1 + 0.2 to equal 0.3', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
});

test('adds -8 + 18 to equal 10', () => {
    expect(sum(-8, 18)).toBe(10);
});