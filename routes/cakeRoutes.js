const express = require('express');
const cakeController = require('./../controllers/cakeController');
const router = express.Router();

router
  .route('/')
  .get(cakeController.getAllCake)
  .post(cakeController.createCake);
router
  .route('/:id')
  .get(cakeController.getCake)
  .patch(cakeController.updateCake)
  .delete(cakeController.deleteCake);

module.exports = router;
