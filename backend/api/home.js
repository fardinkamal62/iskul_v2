const home = module.exports

const middlewares = require('../middlewares')

home.home = (req, res, next) => {
    const authentication = middlewares.auth.authenticate(req, res, next)
    res.json(authentication)
}

