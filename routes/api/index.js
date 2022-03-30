const router = require('express').Router();
const pizzaController = require('../../controllers/pizza-controller');
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);


module.exports = router;