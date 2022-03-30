const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;