const schedule = module.exports

const db = require('../../../db')

const collection = db.collection.list.CLASS
const userCollection = db.collection.list.USERS

schedule.get = async (req, res) => {
    const userData = await db.calls.find(userCollection, {username: req.user.username})
    const response = await db.calls.find(collection, {
        batch: userData[0].batch,
        department: userData[0].department
    });
    res.json({code: 200, data: response});
}
