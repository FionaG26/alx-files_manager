import express from 'express';

/**
 * Add middlewares to the express app.
 * @param {express.Express} app The express application.
 */
const injectMiddlewares = (app) => {
  app.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
