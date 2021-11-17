const express = require('express');
const router = express.Router();
const {getAllUsers } = require('../controllers/userController');
const { login } = require('../controllers/authController');


// User Route
router.get('/', (req, res) => {
    res.send('Hello World');
});


//auth
router.post('/login',login);

//router for get all users
router.get('/users',getAllUsers);




module.exports = router;