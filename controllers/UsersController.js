import sha1 from 'sha1';
import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

const { ObjectId } = require('mongodb');

class UsersController {
  static async postNew(request, response) {
    const newEmail = request.body.email;
    if (!newEmail) return response.status(400).send({ error: 'Missing email' });

    const newPassword = request.body.password;
    if (!newPassword) return response.status(400).send({ error: 'Missing password' });

    const oldEmail = await DBClient.db.collection('users').findOne({ email: newEmail });
    if (oldEmail) return response.status(400).send({ error: 'Already exist' });

    const passwordHash = sha1(newPassword);

    const result = await DBClient.db.collection('users').insertOne({ email: newEmail, password: passwordHash });
    return response.status(201).send({ id: result.insertedId, email: newEmail });
  }

  static async getMe(request, response) {
    const token = request.header('X-Token') || null;

    if (!token) return response.status(401).send({ error: 'Unauthorized' });

    const userId = await RedisClient.get(`auth_${token}`);
    if (!userId) return response.status(401).send({ error: 'Unauthorized' });

    const user = await DBClient.db.collection('users').findOne({ _id: ObjectId(userId) });
    if (!user) return response.status(401).send({ error: 'Unauthorized' });

    delete user.password;
    return response.status(200).send({ id: user._id, email: user.email });
  }
}

module.exports = UsersController;
