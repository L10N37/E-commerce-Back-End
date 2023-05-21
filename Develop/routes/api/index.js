const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount category routes
router.use('/categories', categoryRoutes);

// Mount product routes
router.use('/products', productRoutes);

// Mount tag routes
router.use('/tags', tagRoutes);

module.exports = router;
