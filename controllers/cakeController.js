const Cake = require('./../models/cakeModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
exports.getAllCake = catchAsync(async (req, res, next) => {
  // const cake = await Cake.find();
  const features = new APIFeatures(Cake.find(), req.query)
    .filter()
    .sort()
    .paginate()
    .limitFields();
  const cake = await features.query;
  // console.log(cake.length);
  // Response
  res.status(200).json({
    length: cake.length,
    data: cake
  });
});
exports.getCake = catchAsync(async (req, res, next) => {
  const cake = await Cake.findById(req.params.id);
  res.status(200).json({
    length: cake.length,
    data: cake
  });
});
exports.createCake = catchAsync(async (req, res, next) => {
  //for now no validation

  const Cake = await Cake.create(req.body);
  res.status(201).json({
    status: 'success',
    data: Cake
  });
});
exports.updateCake = catchAsync(async (req, res, next) => {
  const updateCake = await Cake.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.status(200).json({
    status: 'success',
    data: updateCake
  });
});
exports.deleteCake = catchAsync(async (req, res, next) => {
  const cake = await Cake.findByIdAndDelete(req.params.id);
  // console.log(cake);
  res.status(204).json({ status: 'success' });
});
