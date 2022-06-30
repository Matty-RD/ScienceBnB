const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

router.get('/test/:id', asyncHandler(async(req,res) => {
    const allReviews = await db.Review.findAll({
        where: {
            testId: req.params.id
          }
    });
    return res.json(allReviews);
}));

router.post('/create/:id', asyncHandler(async(req,res) => {
    const {userId, testId, review, rating} = req.body
    const newReview = await db.Review.create({
        userId,
        testId,
        review,
        rating
    });
    return res.json(newReview)
}));

router.delete('/:id(\\d+)', asyncHandler(async(req,res) => {
    const oldReview = await db.Review.findByPk(req.params.id);
			await oldReview.destroy();
			return res.json({id: oldReview.id})
}));



module.exports = router;
