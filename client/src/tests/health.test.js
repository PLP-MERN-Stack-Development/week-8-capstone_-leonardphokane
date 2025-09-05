const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return API status message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('🌍 Community Finance API is running');
  });
});