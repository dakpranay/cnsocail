const express=require('express')
const app=express()
const port=80











app.listen(port,(err)=>{
    if(err){
        console.log(`error in running the server${port}`)
    }
    console.log(`server running on ${port}`)

})