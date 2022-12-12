const registration = module.exports

const utils = require('../utils')

const db = require('../db')

const collection = db.collection.list.REGISTRATION

registration.check = async (req, res) => {
    const resp = await db.calls.find(collection, {code: req.body.reg})
    res.status(200).json(resp)
}

registration.createAccount = async (req, res) => {
    let timeNow = new Date().getTime()
    let password = await utils.bcrypt.hashPassword(req.body.password)
    const query = {
        code: req.body.reg,
    }
    const user = await db.calls.find(collection, query)
    const data = {...user[0], createdAt: timeNow, username: req.body.username, password}
    try {
        const resp = await db.calls.insert('users', data)
        res.status(200).json(resp)
    } catch (e) {
        console.log(e)
        res.status(401).json({error: 'Account already exist'})
    }
}
