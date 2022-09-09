const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

router.get('/:id', asyncHandler(async(req,res) => {
    const allEnlists = await db.Enlist.findAll({
        where: {
            testId: req.params.id
          }
    });
    return res.json(allEnlists);
}));

router.post('/create/:id', asyncHandler(async(req,res) => {
    const {userId, testId, startDate } = req.body
    const newEnlist = await db.Enlist.create({
        userId,
        testId,
        startDate,
    });
    return res.json(newEnlist)
}));

router.delete('/delete/:id(\\d+)', asyncHandler(async(req,res) => {
    const oldEnlist = await db.Enlist.findByPk(req.params.id);
			await oldEnlist.destroy();
			return res.json({id: oldEnlist.id})
}));

module.exports = router;
