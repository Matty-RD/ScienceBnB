const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const { testReducer } = require('../../../frontend/src/store/tests');
const db = require("../../db/models");

router.get('/', asyncHandler(async(req,res) => {
    const allTests = await db.Test.findAll();
    return res.json(allTests);
}));

router.post('/create', asyncHandler(async(req,res) => {
    console.log('Route Hit');
    const newTest = await testReducer.create(req.body);
    return res.json(newTest)
}));

// router.update('/', asyncHandler(async(req,res) => {
//     console.log('Route Hit');
//     const allTests = await db.Test.findAll();
//     console.log(allTests)
//     return res.json(allTests);
// }));

// router.delete('/', asyncHandler(async(req,res) => {
//     console.log('Route Hit');
//     const allTests = await db.Test.findAll();
//     console.log(allTests)
//     return res.json(allTests);
// }));

module.exports = router;
