module.exports.profile = (req, res) => {
    return res.end("<h1>User Controller</h1>")
}


module.exports.signUp = (req, res) => {
    return res.render('user_sign_up', {
        title: "Sign Up"
    })
}


module.exports.signIn = (req, res) => {
    return res.render('user_sign_in', {
        title: "Sign In"
    })
}

module.exports.create = (req, res) => {
}


module.exports.createSession = (req, res) => {

}