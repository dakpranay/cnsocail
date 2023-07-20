module.exports.home=(req,res)=>{

    return res.render('home',{
        title:"Home"
    })

    // return res.end('<h1>Hello</h1>')
}