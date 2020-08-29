const Cake = require('./../models/cakeModel');
exports.getAllCake = async (req, res) => {
  try {
    const cake = await Cake.find();
    res.status(200).json({
      length: cake.length,
      data: cake
    });
  } catch (err) {
    console.log(err.message);
  }
};
exports.getCake = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    res.status(200).json({
      length: cake.length,
      data: cake
    });
  } catch (err) {
    console.log(err.message);
  }
};
exports.createCake = async (req, res) => {
  //for now no validation
  try {
    const Cake = await Cake.create(req.body);
    res.status(201).json({
      status: 'success',
      data: Cake
    });
  } catch (err) {
    console.log(err.message);
  }
};
exports.updateCake = async (req, res) => {
  try {
    const updateCake = await Cake.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json({
      status: 'success',
      data: updateCake
    });
  } catch (err) {
    console.log(err.message);
  }
};
exports.deleteCake = async (req, res) => {
  try {
    const cake = await Cake.findByIdAndDelete(req.params.id);
    // console.log(cake);
    res.status(204).json({ status: 'success' });
  } catch (err) {
    console.log(err.message);
  }
};
