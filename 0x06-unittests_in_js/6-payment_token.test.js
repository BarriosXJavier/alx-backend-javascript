const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct object when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).toEqual({ data: 'Successful response from the API' });
            done();
        });
    });

    it('should do nothing when success is false', () => {
        expect(getPaymentTokenFromAPI(false)).toBeUndefined();
    });
});
