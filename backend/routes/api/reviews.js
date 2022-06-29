const router = require('express').Router();
const asyncHandler = require("express-async-handler");
const db = require("../../db/models");

router.get('/', asyncHandler(async(req,res) => {
    const allReviews = await db.Review.findAll();
    return res.json(allReviews);
}));

router.post('/create', asyncHandler(async(req,res) => {
    const {userId, review, rating} = req.body
    const newReview = await db.Review.create({
        userId,
        testId: 1,
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

// router.get('/:id', asyncHandler(async(req,res) => {
//     const id = req.params.id;
//     const reviews = await db.Review.findAll({
//         where: {
//             userId: {
//                 id
//             }
//         }
//     });
//     console.log(reviews)
//     return res.json(reviews);
// }));

module.exports = router;
