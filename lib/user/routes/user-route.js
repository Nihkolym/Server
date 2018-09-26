const express = require('express');
const userController = require("../controllers/user-controller");

const router = express.Router();



router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser); 
router.delete('/:id', userController.deleteUser); 
router.put('/:id', userController.updateUser); 
router.post('/', userController.postUser);

module.exports = router;
