const router = require('express').Router();
const { login, refresh, register } = require('../controllers/authController');

router.post('/login', login);
router.post('/register', register);
router.post('/refresh', refresh);

module.exports = router;