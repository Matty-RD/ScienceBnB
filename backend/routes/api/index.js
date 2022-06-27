const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const testsRouter = require('./tests.js');

router.use('/tests', testsRouter);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
