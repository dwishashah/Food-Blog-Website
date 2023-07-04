const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 3000

require("dotenv").config()

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use(expressLayouts)

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes)

app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.listen(port, function(){
    console.log('Listening')
})
