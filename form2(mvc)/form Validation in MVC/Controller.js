const schema=require('./Schema')

const Signup=async(req,res)=>{
    const details=new schema({
        ...req.body
    })
    
    //email verfying already you have account or not 
    const{Email}=req.body  // destuctring
    //or const verify await schema.findOne(req.body.Email)
    const verify=await schema.findOne({Email})
    if(verify){
     return res.json("You Have a Already Account")
    
    }

    // new user  email and passord stored
   await details.save()
   .then(() =>{
    console.log("You Registered Sucessfully");
    return res.json("Register Sucessfully")
})
  .catch(()=>{
    console.log("Something Wrong");
    return res.json("Try Again")
})


}

const Login=async(req,res)=>{

    const {Email,Password}=req.body
    const user= await schema.findOne({Email})

    // user is arrievd or not
    if(!user){
      return  res.json("Invalid Email")
       
    }
   
   const match = (Password === user.Password)
   if(!match){
    res.json("User or Password is incorrect")
   
   }

res.json("Login Successfully")
console.log(user);
 
}

module.exports={Signup,Login}