class ErrorHandler extends Error {
  /**
   * @param  {String} statusCode The HTTP response code
   * @param  {String} message The HTTP response message
   */
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

/**
 * @param  {Error} err The error object
 * @param  {Response} res The HTTP response object
 */
const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    message
  });
};

module.exports = {
  ErrorHandler,
  handleError
};
