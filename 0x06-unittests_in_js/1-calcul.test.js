const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("Tests advanced calculateNumber function:", function () {
    describe("SUM function:", function () {
        it("should return 5", function () {
            assert.strictEqual(calculateNumber('SUM', 2.4, 2.6), 5);
        });
        it("should return 7", function () {
            assert.strictEqual(calculateNumber('SUM', 3.3, 3.7), 7);
        });
        it("should return 1", function () {
            assert.strictEqual(calculateNumber('SUM', -0.4, 1.4), 1);
        });
    });

    describe("SUBTRACT function:", function () {
        it("should return -1", function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 3.5), -1);
        });
        it("should return 2", function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.3), 2);
        });
        it("should return -3", function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 4.2), -3);
        });
    });

    describe("DIVIDE function:", function () {
        it("should return 0.5", function () {
            assert.strictEqual(calculateNumber('DIVIDE', 2.4, 4.5), 0.5);
        });
        it("should return 3", function () {
            assert.strictEqual(calculateNumber('DIVIDE', 9.0, 3.0), 3);
        });
        it("should return 'Error' when dividing by 0", function () {
            assert.strictEqual(calculateNumber('DIVIDE', 2.4, 0), 'Error');
        });
    });
});