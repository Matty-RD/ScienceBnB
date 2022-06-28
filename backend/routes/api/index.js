const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const testsRouter = require('./tests.js');

router.use('/tests', testsRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

module.exports = router;
