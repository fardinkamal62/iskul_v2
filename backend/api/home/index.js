const home = module.exports

const personal = require('./personal')
const classInfo = require('./class')

const sectionObject = {
    personal: personal.get,
    class: classInfo.get
}

home.index = (req, res) => {
    const section = req.query.section
    sectionObject[section](req, res)
}
