const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const cookie = require('cookie-parser')

require('dotenv').config({path: __dirname + '/./../.env'});

const routes = require('./routes/index')
const homeRoutes = require('./routes/home')

const app = express()

app.use(cors())
app.use(parser.urlencoded({
    extended: true
}));
app.use(parser.json());
app.use(cookie())

app.use('/', routes)
app.use('/home', homeRoutes)

const PORT = process.env.PORT
app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);

})
