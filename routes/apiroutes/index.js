const router = require('express').Router();
const animalRoutes = require('../apiroutes/animalRoutes');

router.use(animalRoutes);

module.exports = router;