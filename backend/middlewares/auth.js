const auth = module.exports

const jwt = require('jsonwebtoken')

auth.authenticate = (req) => {
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]
    if (header === undefined) {
        return {code: 401, message: 'Unauthorised'}
    }
    return jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return {code: 403, message: 'Mismatch'}
        req.user = user
        return {code: 200, message: "Verified"}
    })
}
