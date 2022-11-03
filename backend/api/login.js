const login = module.exports

const jwt = require('jsonwebtoken')

const db = require('../db');
const utils = require('../utils')

const collection = db.collection.list.USERS

login.signIn = async (req, res) => {
    try {
        const user = await db.calls.find(collection, {$or: [{username: req.body.email}, {email: req.body.email}]})
        if (user.length < 1) {
            res.status(404).json({error: "User Not Found"})
        }
        const match = await utils.bcrypt.comparePassword(req.body.password, user[0].password)
        if (!match) {
            res.status(403).json({error: "Password Mismatch"})
        }
        const sign = jwt.sign({username: user[0].username}, process.env.TOKEN_SECRET)
        res.status(200).json(sign)
    } catch (e) {
        console.log(e)
    }
}
