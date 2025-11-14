import express from 'express'
import { createProduct, getProducts } from '../controllers/productController.js';
import { notAllowed } from '../utils/notAlllowed.js';

const router = express.Router();

router.route('/products')
.get(getProducts)
.post(createProduct)
.all(notAllowed);


//USED AS MIDDLEWARE IN INDEX.JS for the product rooutes defined here to work
export default router;