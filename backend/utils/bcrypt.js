const bcrypt = module.exports

const bc = require('bcrypt')

bcrypt.hashPassword = async (plaintextPassword) => {
    const hash = await bc.hash(plaintextPassword, 10);
    return hash
}

bcrypt.comparePassword = async (plaintextPassword, hash) => {
    const result = await bc.compare(plaintextPassword, hash);
    return result
}
