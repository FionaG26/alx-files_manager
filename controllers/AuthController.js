import sha1 from 'sha1';
import { v4 as uuidv4 } from 'uuid';
import DBClient from '../utils/db';
import RedisClient from '../utils/redis';

class AuthController {
  static async getConnect(request, response) {
    const auth = request.header('Authorization') || null;
    if (!auth) return response.status(401).send({ error: 'Unauthorized' });

    const buff = Buffer.from(auth.replace('Basic ', ''), 'base64');
    const creds = {
      email: buff.toString('utf8').split(':')[0],
      password: buff.toString('utf8').split(':')[1],
    };
    creds.password = sha1(creds.password);
    if (!creds.email || !creds.password) return response.status(401).send({ error: 'Unauthorized' });

    const getUser = await DBClient.db.collection('users').findOne(creds);
    if (!getUser) return response.status(401).send({ error: 'Unauthorized' });

    const token = uuidv4();
    const key = `auth_${token}`;

    await RedisClient.set(key, getUser._id.toString(), 86400);
    return response.status(200).send({ token });
  }

  static async getDisconnect(request, response) {
    const token = request.header('X-Token') || null;

    if (!token) return response.status(401).send({ error: 'Unauthorized' });

    const userId = RedisClient.get(`auth_${token}`);
    if (!userId) return response.status(401).send({ error: 'Unauthorized' });

    await RedisClient.del(`auth_${token}`);
    return response.status(204).send();
  }
}

module.exports = AuthController;
