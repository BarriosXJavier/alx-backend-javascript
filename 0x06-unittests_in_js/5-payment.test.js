const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Stub', function () {
    let spyConsole;

    beforeEach(() => {
        spyConsole = sinon.spy(console, 'log');
    });

    afterEach(() => {
        spyConsole.restore();
    });

    it('Ensures math is stubbed and console logs correct message.', () => {
        const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);

        sendPaymentRequestToApi(100, 20);

        expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

        stubUtils.restore();
    });

    it('should log the correct total for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;
        expect(spyConsole.calledOnce).to.be.true;
    });

    it('should log the correct total for 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        expect(spyConsole.calledOnceWithExactly('The total is: 20')).to.be.true;
        expect(spyConsole.calledOnce).to.be.true;
    });
});