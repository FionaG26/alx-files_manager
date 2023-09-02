import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get('/status', ((request, response) => AppController.getStatus(request, response)));
router.get('/stats', ((request, response) => AppController.getStats(request, response)));
router.post('/users', ((request, response) => UsersController.postNew(request, response)));
router.get('/connect', ((request, response) => AuthController.getConnect(request, response)));
router.get('/disconnect', ((request, response) => AuthController.getDisconnect(request, response)));
router.get('/users/me', ((request, response) => UsersController.getMe(request, response)));

export default router;
