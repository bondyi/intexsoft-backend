const router = require('express').Router();

const authRouter = require('./authRoutes');
const userRouter = require('./userRoutes');

router.use('/auth', authRouter);
router.use('/user', userRouter);

module.exports = router;
