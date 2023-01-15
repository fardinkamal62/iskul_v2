const classInfo = module.exports

const sub = require('./class/index')

const section = {
    schedule: sub.schedule.get,
}

classInfo.get = ((req, res) => {
    section[req.query.section](req, res)
})