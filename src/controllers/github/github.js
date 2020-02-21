// const request = require('../request/request')
const axios = require("axios").default

const getUser = user => axios(`https://api.github.com/users/${user}`)

module.exports = {getUser}