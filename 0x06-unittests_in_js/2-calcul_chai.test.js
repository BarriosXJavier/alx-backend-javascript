const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe("Tests advanced calculateNumber function:", function () {
    describe("SUM function:", function () {
        it("should return 5", function () {
            expect(calculateNumber('SUM', 2.4, 2.6)).to.equal(5);
        });
        it("should return 7", function () {
            expect(calculateNumber('SUM', 3.3, 3.7)).to.equal(7);
        });
        it("should return 1", function () {
            expect(calculateNumber('SUM', -0.4, 1.4)).to.equal(1);
        });
    });

    describe("SUBTRACT function:", function () {
        it("should return -1", function () {
            expect(calculateNumber('SUBTRACT', 2.4, 3.5)).to.equal(-1);
        });
        it("should return 2", function () {
            expect(calculateNumber('SUBTRACT', 5.5, 3.3)).to.equal(2);
        });
        it("should return -3", function () {
            expect(calculateNumber('SUBTRACT', 1.2, 4.2)).to.equal(-3);
        });
    });

    describe("DIVIDE function:", function () {
        it("should return 0.5", function () {
            expect(calculateNumber('DIVIDE', 2.4, 4.5)).to.equal(0.5);
        });
        it("should return 3", function () {
            expect(calculateNumber('DIVIDE', 9.0, 3.0)).to.equal(3);
        });
        it("should return 'Error' when dividing by 0", function () {
            expect(calculateNumber('DIVIDE', 2.4, 0)).to.equal('Error');
        });
    });
});