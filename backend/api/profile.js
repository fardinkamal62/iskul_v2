const profile = module.exports

const db = require('../db');
const utils = require('../utils')

const collection = db.collection.list.USERS

profile.get = async (req, res) => {
    const userData = await db.calls.find(collection, {username: req.user.username})
    res.json({data: userData[0], code: 200})
}