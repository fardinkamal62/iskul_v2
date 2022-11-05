const auth = module.exports

const jwt = require('jsonwebtoken')

auth.authenticate = (req, res, next) => {
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]
    if (header === undefined) {
        res.json({code: 401, message: 'Unauthorised'})
    }
    return jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            res.json({code: 403, message: 'Mismatch'})
        }
        req.user = user
        next()
    })
}
