const home = module.exports

const personal = require('./personal')
const classInfo = require('./class/index')
const profile = require('./profile')

const sectionObject = {
    personal: personal.get,
    editProfile: personal.editProfile,
    class: classInfo.schedule.get,
    profile: profile.get,
}

home.index = (req, res) => {
    const section = req.query.section
    sectionObject[section](req, res)
}

home.updateProfile = (req, res) => {
    personal.updateProfile(req, res)
}