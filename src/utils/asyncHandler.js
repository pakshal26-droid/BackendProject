const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
/*
In Express.js applications, handling asynchronous route handlers can be tricky because errors thrown in async functions or rejected promises are not automatically caught by the framework. If not handled properly, such errors might crash the application or lead to unhandled rejections.

The asyncHandler function ensures that:

Any errors in the asynchronous route or middleware (requestHandler) are caught and passed to the Express error handler.
You don't need to manually wrap every route in try-catch blocks.*/
