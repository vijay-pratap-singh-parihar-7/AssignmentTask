const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/:user_id', UserController.getUser);
router.put('/:user_id', UserController.updateUser);

module.exports = router;
