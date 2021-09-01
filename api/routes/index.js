const bodyParser = require('body-parser')
const filme = require('./filmeRoutes')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(filme)
} 