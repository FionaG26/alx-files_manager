// authenticationMiddleware.js
import { Request, Response, NextFunction } from 'express';
import { getUserFromCustomAuth1, getUserFromCustomAuth2 } from '../utils/auth';

/**
 * Applies Custom Authentication 1 to a route.
 * @param {Request} req The Express request object.
 * @param {Response} res The Express response object.
 * @param {NextFunction} next The Express next function.
 */
export const customAuth1Middleware = async (req, res, next) => {
  const user = await getUserFromCustomAuth1(req);

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  req.user = user;
  next();
};

/**
 * Applies Custom Authentication 2 to a route.
 * @param {Request} req The Express request object.
 * @param {Response} res The Express response object.
 * @param {NextFunction} next The Express next function.
 */
export const customAuth2Middleware = async (req, res, next) => {
  const user = await getUserFromCustomAuth2(req);

  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  req.user = user;
  next();
};
