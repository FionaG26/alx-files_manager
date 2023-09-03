const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace with your Express app instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('/stats endpoint', () => {
  it('should get statistics and return status 200', (done) => {
    chai
      .request(app)
      .get('/stats')
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Add assertions for the response data and statistics
        // Example: expect(res.body.stats).to.be.an('object');
        done();
      });
  });
});
