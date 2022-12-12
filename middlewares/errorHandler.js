// const errorHandler = (err, req, res, next) => {
//   if (process.env.NODE_ENV !== "development") {
//     console.log(err.name);
//     console.log(err.message);
//   }
//   if (err.name === "CastError") {
//     return res
//       .status(400)
//       .json({ error: "What you passed is an invalid objectId!" });
//   }
//   res.status(err.statusCode || 500).json({ error: err.message });
// };

// export default errorHandler;

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
