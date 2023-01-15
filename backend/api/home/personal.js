const personal = module.exports

const db = require('../../db')

const collection = db.collection.list.USERS;
personal.get = async (req, res) => {
    const userData = await db.calls.find(collection, {username: req.user.username})
    res.json({data: userData[0], code: 200})
}

personal.editProfile = async (req, res) => {
    this.get(req, res)
}

personal.updateProfile = async (req, res) => {
    if (req.body.password === '') {
        delete req.body.password
    }

    const response = await db.calls.update(collection, {username: req.user.username}, req.body)
    res.json({data: response, code: 200})
}
