const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {
      it('should respond with 200 OK', () => {
        return request(server)
          .get('/')
          .then(response => {
            expect(response.status).toBe(200);
          });
      });
  
      it('should work', () => {
        return request(server)
          .get('/')
          .expect(200);
      });
  
      it('should return JSON', () => {
        return request(server)
          .get('/')
          .then(res => {
            expect(res.type).toBe('application/json');
          });
      });
  
    it('should check for json', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /json/);
    });
  
    it('should return { api: "up" }', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toEqual({ api: 'up and running!' });
        });
    });
  });


  describe('POST /games', () => {
  //Write tests to verify that the endpoint returns the correct
  // HTTP status code when receiving correct and incorrect
  // game data.
    it('should return HTTP status 201 when successful', () => {
        return request(server)
            .post('/games')
            .send({title: 'test1', genre: 'test1', releaseYear: 2000})
            .then(res => {
                expect(res.status).toBe(201);
            })
    })

    it('should return HTTP status 422 when not all data is provided', () => {
        return request(server)
            .post('/games')
            .send({genre: 'test1', releaseYear: 2000})
            .then(res => {
                expect(res.status).toBe(422);
            })
    })

    it('should return the  new game', () => {
        return request(server)
            .post('/games')
            .send({title: 'test1', genre: 'test1', releaseYear: 2000})
            .then(res => {
                expect(res.text).toEqual("{\"message\":\"New Game added to Database\"}")
            })
    })
  })

});