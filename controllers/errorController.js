//This is a middleware function(considered as a error middleware func by default since it has (err,req,res,next) as its arguments)

module.exports = (err, req, res, next) => {
  err.status = err.status || 'fail';
  err.statuscode = err.statuscode || 500;

  //sending the response
  res.status(err.statuscode).json({
    status: err.status,
    message: err.message
  });
};
