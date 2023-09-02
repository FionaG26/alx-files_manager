/**
 * Represents an error in this API.
 */
export class APIError extends Error {
  constructor(code, message) {
    super();
    this.code = code || 500;
    this.message = message;
  }
}

/**
 * Applies Basic authentication to a route.
 * @param {Error} err The error object.
 * @param {Request} req The Express request object.
 * @param {Response} res The Express response object.
 */
export const errorResponse = (err, req, res) => {
  const defaultMsg = `Failed to process ${req.url}`;

  if (err instanceof APIError) {
    res.status(err.code).json({ error: err.message || defaultMsg });
    return;
  }
  res.status(500).json({
    error: err ? err.message || err.toString() : defaultMsg,
  });
};
