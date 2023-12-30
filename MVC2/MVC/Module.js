const schema=require('./Schema')

const PostData=async(req,res)=>{
    const data=new schema({
        ...req.body
    })
    const Post=await data.save()
    res.json(Post)
    console.log(req.body);

}
const GetData=async(req,res)=>{
    const Get=await schema.find({})
    res.json(Get)
}

const UbdateData=async(req,res)=>{
  const Ubdate=await schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
 
 if(Ubdate){
    res.json({msg:"UbdateSucessfully",data:Ubdate})
 } 
 else{
    res.json("cant ubdate")
 }
}
const DeleteData=async(req,res)=>{
    const deleted = await schema.findByIdAndDelete(req.params.id)
    res.json({msg:"Deleted Successfully"})
}
module.exports={PostData,GetData,UbdateData,DeleteData}
