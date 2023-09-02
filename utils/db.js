import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    // Create a MongoDB client instance
    this.client = new MongoClient(`mongodb://${host}:${port}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connect to MongoDB when the DBClient instance is created
    this.client.connect()
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Error connecting to MongoDB:', err));
  }

  async isAlive() {
    // Check if the MongoDB client is connected
    return !!this.client && this.client.isConnected();
  }

  async nbUsers() {
    // Check if the MongoDB client is connected
    if (!this.client.isConnected()) {
      throw new Error('MongoDB is not connected');
    }

    // Access the 'users' collection and count the documents
    const db = this.client.db();
    const usersCollection = db.collection('users');
    return usersCollection.countDocuments();
  }

  async nbFiles() {
    // Check if the MongoDB client is connected
    if (!this.client.isConnected()) {
      throw new Error('MongoDB is not connected');
    }

    // Access the 'files' collection and count the documents
    const db = this.client.db();
    const filesCollection = db.collection('files');
    return filesCollection.countDocuments();
  }
}

// Create and export an instance of DBClient
const dbClient = new DBClient();
export default dbClient;

