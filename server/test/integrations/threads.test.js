const chai= require('chai');
const request = require('supertest');

const mongooseHelper = require('./mongooseHelper');
const fixtures=require('./fixtures');

const app =require('../../src/app');

//const gato = require('mocha');
//const app = require('../../src/app');


const expect = chai.expect;

describe('Threads endpoint', () => {

  describe('when calling GET /', () => {


before(async () => await fixtures.seedThreads());
after(async () => await mongooseHelper.dropDatabase());

    it('return a list of threads', () => {
      return request(app).get('/threads')
        .expect('Content-Type', /json/)
        .expect(200)

        .then(response => {
          const { body } = response;

          expect(body.data).to.have.length(2);
          expect(body.data[0].title).to.equal('El sistema de matricula esta dañado');
          expect(body.data[1].title).to.equal('El problema de transporte en Panama');

        });
    });


    it('return an empty array if there no threads', () => {

    });
  });



  describe('When calling POST /threads', () => {

    xit('create a new thread', () => {

    });

    xit('return HTTP code 400 if invalid params are sents', () => {

    });

  });
});
