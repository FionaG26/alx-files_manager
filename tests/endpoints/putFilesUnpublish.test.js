const request = require('supertest');
const app = require('./server'); // Import your Express app

describe('PUT /files/:id/unpublish', () => {
  it('should unpublish the specified file and return a 200 status code', async () => {
    // Define a file ID for an existing file in your application
    const fileId = 'YOUR_FILE_ID';

    const response = await request(app)
      .put(`/files/${fileId}/unpublish`);

    expect(response.status).toBe(200);
    // Add expectations for the response body based on your application's behavior
  });
});
