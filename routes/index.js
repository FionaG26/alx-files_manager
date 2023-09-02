import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = express.Router();

// Home route handled by AppController
router.get('/', AppController.getHome);

// User routes handled by UsersController
router.get('/users', UsersController.getAllUsers);
router.get('/users/:userId', UsersController.getUserById);
router.post('/users', UsersController.createUser);
router.put('/users/:userId', UsersController.updateUser);
router.delete('/users/:userId', UsersController.deleteUser);

// Authentication routes handled by AuthController
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

// File routes handled by FilesController
router.get('/files', FilesController.getAllFiles);
router.get('/files/:fileId', FilesController.getFileById);
router.post('/files', FilesController.uploadFile);
router.put('/files/:fileId', FilesController.updateFile);
router.delete('/files/:fileId', FilesController.deleteFile);

export default router;

