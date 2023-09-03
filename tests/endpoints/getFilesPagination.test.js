const request = require('supertest');
const app = require('./server'); // Import your Express app

describe('GET /files', () => {
  it('should return a paginated list of files', async () => {
    // Define pagination parameters (e.g., page, limit) for testing
    const page = 1;
    const limit = 10;

    const response = await request(app)
      .get(`/files?page=${page}&limit=${limit}`);

    expect(response.status).toBe(200);
    // Add expectations for the response body based on your application's pagination behavior
  });
});
