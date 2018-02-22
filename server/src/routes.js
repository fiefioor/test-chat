const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const ConversationController = require('./controllers/ConversationController')

const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/logout',
    AuthenticationController.logout)

  app.get('/conversation',
    isAuthenticated,
    ConversationController.index)

  app.get('/conversation/:id',
    isAuthenticated,
    ConversationController.getMessages)

  app.post('/conversation/:id/sendMessage',
    isAuthenticated,
    ConversationController.sendMessage
  )
}
