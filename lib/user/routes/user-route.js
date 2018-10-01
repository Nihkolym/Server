const express = require('express');
const userController = require("../controllers/user-controller");
const checkParams = require('../../tools/check-params.middleware');
const joi = require('joi');
const User = require('../user');

const router = express.Router();



router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser); 
router.delete('/:id', userController.deleteUser); 
router.put('/:id', checkParams.validateParamsSequelize(User), userController.updateUser); 
router.post('/', checkParams.validateParamsJoi(joi.object().keys({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().required()
})), userController.postUser);

module.exports = router;
