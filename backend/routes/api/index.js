const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const testsRouter = require('./tests.js');
const reviewsRouter = require('./reviews.js');
const enlistsRouter = require('./enlist.js');

router.use('/tests', testsRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/reviews', reviewsRouter);
router.use('/enlist', enlistsRouter);

module.exports = router;
