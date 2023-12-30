const express=require('express')
const router=express.Router()
 const {Signup,Login}=require('./Controller')
// const controller=require ('./Controller')

router.post('/Signup',Signup)
router.post('/login',Login)

module.exports=router