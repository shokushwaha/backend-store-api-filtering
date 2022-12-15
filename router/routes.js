const express=require('express')
const router=express.Router()

const {getAllProducts}=require('../controller/products')
router.route('/').get(getAllProducts)


module.exports=router;