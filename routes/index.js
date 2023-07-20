const express=require('express');
const router=express.Router();
const homeController=require('../controller/homeController')

console.log("router loaded")

module.exports=router;

router.get('/',homeController.home)
