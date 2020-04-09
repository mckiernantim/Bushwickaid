const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express();
app.use('/public', express.static(path.join( __dirname, 'public')))

// view engine setup 
app.engine("handlebars", exphbs())
app.set('view enginer', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//body parser middleware

app.get('/', (req,res) =>{
    res.send('hello')

});

app.listen(3000, () => console.log('server stared'))