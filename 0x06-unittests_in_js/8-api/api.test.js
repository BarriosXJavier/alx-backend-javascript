const request = require('supertest');
const express = require('express');

const app = require('./api');

describe('GET /', () => {
    it('should return status code 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('should return the correct message', (done) => {
        request(app)
            .get('/')
            .expect('Welcome to the payment system', done);
    });

});
