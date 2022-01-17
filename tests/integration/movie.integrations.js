import { expect } from 'chai';
import nock from 'nock';
import request from 'supertest';
import app from '../../app/index';
import movies from '../mocks/fetch.movies.response.mock.json'

describe('Movie APIs', () => {
  it('should fetch movies successfully', (done) => {
    nock('https://swapi.dev/api')
      .get('/films/')
      .reply(200, movies);
    request(app)
      .get('/api/v1/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal('Movies fetched successfully');
        expect(res.body.code).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });
});
