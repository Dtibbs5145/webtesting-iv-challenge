const request = require('supertest');
const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {
        it('should show a 200 code', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
            });
        });
    });

    describe('POST /users', () => {
        it('should show the added user', () => {
            const res = request(server).post('/users');
            expect(res.body).toEqual({ id: 13, name: 'UserName' });
        });
        it('no name shows a 422', () => {
            const res = request(server).post('/users');
            expect(res.status).toBe(422);
        });
    });

    describe('DELETE /users/:id', () => {
        it('should remove user', () => {
            const res = request(server).remove('/users/id');
            expect(res.body).toEqual({ id:1, name: 'Name of user' });
        });
        it('should return a 404 if user is not found', () => {
            const res = request(server).remove('users/id');
            expect(res.status).toBe(404);
        })
    })