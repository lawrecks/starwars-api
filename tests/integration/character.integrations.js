import { expect } from 'chai';
import nock from 'nock';
import request from 'supertest';
import app from '../../app/index';
import characters from '../mocks/fetch.characters.response.mock.json';

describe('Character APIs', () => {
  it('should fetch list of characters successfully', (done) => {
    nock('https://swapi.dev/api').get('/people/').reply(200, characters);
    request(app)
      .get('/api/v1/characters')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal('Characters fetched successfully');
        expect(res.body.code).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });

  it('should filter characters by gender', (done) => {
    nock('https://swapi.dev/api').get('/people/').reply(200, characters);
    request(app)
      .get('/api/v1/characters')
      .query({
        gender: 'male',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal('Characters fetched successfully');
        expect(res.body.code).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });

  it('should sort characters by name in descending order', (done) => {
    nock('https://swapi.dev/api').get('/people/').reply(200, characters);
    request(app)
      .get('/api/v1/characters')
      .query({
        sort: 'name',
        order: 'desc',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal('Characters fetched successfully');
        expect(res.body.code).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });

  it('should sort characters by height in ascending order', (done) => {
    nock('https://swapi.dev/api').get('/people/').reply(200, characters);
    request(app)
      .get('/api/v1/characters')
      .query({
        sort: 'height',
        order: 'asc',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal('Characters fetched successfully');
        expect(res.body.code).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });
});
