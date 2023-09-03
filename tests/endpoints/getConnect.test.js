const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace with your Express app instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('/connect GET endpoint', () => {
  it('should connect to a resource and return status 200', (done) => {
    chai
      .request(app)
      .get('/connect')
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Add assertions for the response data and connection status
        // Example: expect(res.body.connected).to.be.true;
        done();
      });
  });
});
