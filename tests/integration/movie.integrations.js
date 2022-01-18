import { expect } from 'chai';
import nock from 'nock';
import request from 'supertest';
import app from '../../app/index';
import movies from '../mocks/fetch.movies.response.mock.json';

describe('Movie APIs', () => {
  it('should fetch movies successfully', (done) => {
    nock('https://swapi.dev/api').get('/films/').reply(200, movies);
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

  it('should add a comment to a movie', (done) => {
    request(app)
      .post('/api/v1/movies/1/comment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({
        comment: "Best I've seen this year",
      })
      .expect(201)
      .end((err, res) => {
        expect(res.body.message).to.equal('Comment added successfully');
        expect(res.body.code).to.equal(201);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });

  it('should throw error for missing field', (done) => {
    request(app)
      .post('/api/v1/movies/1/comment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({})
      .expect(400)
      .end((err, res) => {
        expect(res.body.code).to.equal(400);
        expect(res.body.status).to.equal('error');
        done();
      });
  });

  it('should throw error for invalid params', (done) => {
    request(app)
      .post('/api/v1/movies/1a/comment')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .send({
        comment: "Best I've seen this year",
      })
      .expect(400)
      .end((err, res) => {
        expect(res.body.code).to.equal(400);
        expect(res.body.status).to.equal('error');
        done();
      });
  });

  it('should fetch comments for a movie successfully', (done) => {
    request(app)
      .get('/api/v1/movies/1/comments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.message).to.equal('Comments fetched successfully');
        expect(res.body.code).to.equal(200);
        expect(res.body).to.haveOwnProperty('data');
        done();
      });
  });

  it('should throw error for invalid params', (done) => {
    request(app)
      .get('/api/v1/movies/1a/comments')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        expect(res.body.code).to.equal(400);
        expect(res.body.status).to.equal('error');
        done();
      });
  });
});
