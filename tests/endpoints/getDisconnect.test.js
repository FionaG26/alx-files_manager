// Import necessary testing libraries and your server app
const request = require('supertest');
const app = require('../app'); // Import your Express app

// Write a test case for the /disconnect GET endpoint
describe('GET /disconnect', () => {
  it('should return a 200 status code and a success message', async () => {
    const response = await request(app)
      .get('/disconnect');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Disconnected successfully');
  });
});
