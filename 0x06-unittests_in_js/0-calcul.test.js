const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Tests calculateNumber function:", function () {
    describe("Calculates two integers:", function () {
        it('Returns 7.', function () {
            assert.strictEqual(calculateNumber(3, 4), 7);
        });
    });
    describe("Calculates one float & one integer:", function () {
        it('Returns 8.', function () {
            assert.strictEqual(calculateNumber(3, 4.7), 8);
        });
    });
    describe("Calculates one float & one integer (round down):", function () {
        it('Returns 7.', function () {
            assert.strictEqual(calculateNumber(3, 4.3), 7);
        });
    });
    describe("Calculates one float & one int reversed:", function () {
        it('Returns 8.', function () {
            assert.strictEqual(calculateNumber(4.7, 3), 8);
        });
    });
    describe("Calculates two floats:", function () {
        it('Returns 8.', function () {
            assert.strictEqual(calculateNumber(3.2, 4.7), 8);
        });
    });
    describe("Calculates two floats w/borderline:", function () {
        it('Returns 9.', function () {
            assert.strictEqual(calculateNumber(3.5, 4.7), 9);
        });
    });
    describe("Calculates negative numbers:", function () {
        it('Returns -5.', function () {
            assert.strictEqual(calculateNumber(-2, -3), -5);
        });
    });
    describe("Calculates mixed positive and negative numbers:", function () {
        it('Returns 1.', function () {
            assert.strictEqual(calculateNumber(-2, 3), 1);
        });
    });
});