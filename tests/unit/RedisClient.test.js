import { expect } from 'chai'; // or your preferred assertion library
import { redisClient } from './redis'; // Adjust the import path accordingly

describe('RedisClient', () => {
  before(async () => {
    // Ensure that the Redis client is connected before running tests
    if (!redisClient.isAlive()) {
      console.error('Redis client is not connected. Please check your Redis server.');
      process.exit(1); // Exit the test suite if Redis is not connected
    }
  });

  it('should set and get a key-value pair in Redis', async () => {
    const key = 'testKey';
    const value = 'testValue';
    const duration = 60; // Expiration time in seconds

    // Set a key-value pair with expiration time
    await redisClient.set(key, value, duration);

    // Get the value from Redis and assert it matches the set value
    const retrievedValue = await redisClient.get(key);
    expect(retrievedValue).to.equal(value);
  });

  it('should delete a key from Redis', async () => {
    const key = 'testKeyToDelete';

    // Set a key-value pair
    await redisClient.set(key, 'valueToDelete');

    // Delete the key from Redis
    await redisClient.del(key);

    // Check if the key has been deleted
    const deletedValue = await redisClient.get(key);
    expect(deletedValue).to.be.null;
  });

  it('should handle non-existent keys gracefully', async () => {
    const nonExistentKey = 'nonExistentKey';

    // Try to get a non-existent key from Redis and assert it returns null
    const retrievedValue = await redisClient.get(nonExistentKey);
    expect(retrievedValue).to.be.null;
  });
});
