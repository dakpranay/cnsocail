const express=require('express')
const path=require('path')
const app=express()
const port=80

//use express router

app.use('/',require('./routes'))

//set up the view engine
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static(path.join(__dirname, './assests')))



app.listen(port,(err)=>{
    if(err){
        console.log(`error in running the server${port}`)
    }
    console.log(`server running on ${port}`)

})