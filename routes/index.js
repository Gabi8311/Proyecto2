const { router } = require('../app')

module.exports = app => {

  // Base URLS
  app.use('/', require('./base.routes'))

  app.use('/auth', require('./auth.routes'))
  app.use('/profile', require('./profile.routes'))
  app.use('/movies', require('./movies.routes'))
  app.use('/comics', require('./comics.routes'))
  app.use('/phrases', require('./phrases.routes'))
  app.use('/events', require('./events.routes'))

}
