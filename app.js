require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)


// Routes index
require('./routes')(app)



module.exports = app

/////Copiado de Germán Maps

// app.use(require('node-sass-middleware')({
//     src: path.join(__dirname, 'public'),
//     dest: path.join(__dirname, 'public'),
//     sourceMap: true
//   }));
  
  
//   app.set('views', path.join(__dirname, 'views'));
//   app.set('view engine', 'hbs');
//   app.use(express.static(path.join(__dirname, 'public')));
//   app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
  
  
//   app.locals.title = 'Google Maps | Express';
  
//   app.use('/restaurants', require('./routes/restaurants.routes'));
