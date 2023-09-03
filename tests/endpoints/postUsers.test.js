const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Replace with your Express app instance
const expect = chai.expect;

chai.use(chaiHttp);

describe('/users POST endpoint', () => {
  it('should create a new user and return status 201', (done) => {
    const newUser = {
      username: 'testuser',
      email: 'test@example.com',
      // Add other required user fields as needed
    };

    chai
      .request(app)
      .post('/users')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        // Add assertions for the response data and newly created user
        // Example: expect(res.body.username).to.equal(newUser.username);
        done();
      });
  });
});
