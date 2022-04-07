// aqui importo el controlador y exporto el router
const express = require('express');
const router = express.Router();

// Import controller functions
const containerFunctions = require('../controllers/products.controller');

// Import Multer middleware
const multerMiddleware = require('../middlewares/multer');

const productExist = require('../middlewares/productMiddleware');


/**
 * This list all the products
 */
router.get('/', containerFunctions.getAll);

/**
 * This return a random product
 */
router.get('/random', containerFunctions.getRandom);

/**
 * This return a product by id
 */
router.get('/:id', productExist ,containerFunctions.getById);

/**
 * This save a new product 
 */
router.post('/', multerMiddleware.single('thumbnail') ,containerFunctions.save);

/**
 * This update an existent product 
 */
router.put('/:id',[productExist, multerMiddleware.single('thumbnail')], containerFunctions.update);

/**
 * This delete an existent product by its id 
 */
router.delete('/:id', productExist, containerFunctions.deleteById);


module.exports = router;