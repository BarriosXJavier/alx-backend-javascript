const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Stub', function () {
    it('Ensures math is stubbed and console logs correct message.', () => {
        const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
        const spyConsole = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

        stubUtils.restore();
        spyConsole.restore();
    });
});