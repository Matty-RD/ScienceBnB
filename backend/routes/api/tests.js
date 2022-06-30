const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

router.get('/', asyncHandler(async(req,res) => {
    const allTests = await db.Test.findAll();
    return res.json(allTests);
}));

router.get('/:id', asyncHandler(async(req,res) => {
    const id = req.params.id;
    const oneTest = await db.Test.findByPk(Number(id));
    const {userId, url, address, city, state, country, name, details, pay} = oneTest;
    return res.json(oneTest);
}));

router.post('/create', asyncHandler(async(req,res) => {
    const {userId, url, address, city, state, country, name, details, pay} = req.body
    const newTest = await db.Test.create({
        userId,
        url,
        address,
        city,
        state,
        country,
        name,
        details,
        pay
    });
    return res.json(newTest)
}));

router.put('/:id(\\d+)', asyncHandler(async function (req, res) {
    console.log(req.body.id)
    const test = await db.Test.findByPk(req.body.id);
    const {userId, url, address, city, state, country, name, details, pay} = req.body
     const newTest = await test.update(req.body)
     return res.json(newTest);
    })
  );

router.delete('/:id(\\d+)', asyncHandler(async(req,res) => {
    const oldTest = await db.Test.findByPk(req.params.id);
    const allReviews = await db.Review.findAll({ where: { testId: req.params.id } })
    const allEnlists = await db.Enlist.findAll({ where: { testId: req.params.id } })
    for (let i = 0; i < allReviews.length; i++) {
        const review = allReviews[i]
        review.destroy()
    }
    for (let i = 0; i < allEnlists.length; i++) {
        const enlist = allEnlists[i]
        enlist.destroy()
    }
    await oldTest.destroy();
    return res.json({id: oldTest.id})
}));


module.exports = router;
