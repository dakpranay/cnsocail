const express=require('express')
const router=express.Router();


const usersController =require('../controller/usersController')

router.get('/profile',usersController.profile)
router.get('/signup',usersController.signUp)
router.get('/signin',usersController.signIn)

module.exports=router

