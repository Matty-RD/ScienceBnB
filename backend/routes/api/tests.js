const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

router.get('/', asyncHandler(async(req,res) => {
    const allTests = await db.Test.findAll();
    return res.json(allTests);
}));

router.post('/create', asyncHandler(async(req,res) => {
    const {userId, address, city, state, country, name, details, pay} = req.body
    const newTest = await db.Test.create({
        userId: 1,
        address: "test",
        city: "test",
        state: "test",
        country: "test",
        name,
        details,
        pay: 20
    });
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
