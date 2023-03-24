// Helper to compose an success response
exports.successResponse = function(statusCode = 200, message = null) {
  message = message || { success: true };
  return {
    statusCode,
    body: JSON.stringify(message),
  };
};

// Helper to compose an error response
exports.errorResponse = function(statusCode = 400, error = { message: 'Something went wrong' }) {
  return {
    statusCode,
    body: JSON.stringify(error),
  };
};
