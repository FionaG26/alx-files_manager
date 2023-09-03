import { expect } from 'chai'; // or your preferred assertion library
import { dbClient } from './db'; // Adjust the import path accordingly

describe('DBClient', () => {
  before(async () => {
    // Ensure that the MongoDB client is connected before running tests
    if (!dbClient.isAlive()) {
      console.error('MongoDB client is not connected. Please check your MongoDB server.');
      process.exit(1); // Exit the test suite if MongoDB is not connected
    }
  });

  it('should check if the MongoDB client is alive', () => {
    const isAlive = dbClient.isAlive();
    expect(isAlive).to.equal(true);
  });

  it('should retrieve the number of users in the database', async () => {
    const numberOfUsers = await dbClient.nbUsers();
    expect(numberOfUsers).to.be.a('number');
  });

  it('should retrieve the number of files in the database', async () => {
    const numberOfFiles = await dbClient.nbFiles();
    expect(numberOfFiles).to.be.a('number');
  });

  it('should retrieve the users collection', async () => {
    const usersCollection = await dbClient.usersCollection();
    expect(usersCollection).to.be.an('object');
    // You can add more specific tests for the collection if needed
  });

  it('should retrieve the files collection', async () => {
    const filesCollection = await dbClient.filesCollection();
    expect(filesCollection).to.be.an('object');
    // You can add more specific tests for the collection if needed
  });
});
