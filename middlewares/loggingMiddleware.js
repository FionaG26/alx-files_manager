import { Request, Response, NextFunction } from 'express';

/**
 * Logging middleware for tracking requests and responses.
 * @param {Request} req The Express request object.
 * @param {Response} res The Express response object.
 * @param {NextFunction} next The Express next function.
 */
export const loggingMiddleware = (req, res, next) => {
  // Log the timestamp, HTTP method, and URL of the incoming request
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Continue to the next middleware or route
  next();
};
