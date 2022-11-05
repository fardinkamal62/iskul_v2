const personal = module.exports

const db = require('../../db')

personal.get = async (req, res) => {
    const collection = db.collection.list.USERS;
    const userData = await db.calls.find(collection, {username: req.user.username})
    res.json({data: userData[0], code: 200})
}