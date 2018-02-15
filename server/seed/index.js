const {
  sequelize,
  User,
  Conversation,
  ConversationUser,
  Message
} = require('../src/models')

const Promise = require('bluebird')
const users = require('./users.json')
const conversations = require('./conversations.json')
const conversationusers = require('./conversationusers.json')
const messages = require('./messages.json')

sequelize.sync({force: true})
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      conversations.map(conversation => {
        Conversation.create(conversation)
      })
    )
    await Promise.all(
      conversationusers.map(conversationuser => {
        ConversationUser.create(conversationuser)
      })
    )
    await Promise.all(
      messages.map(message => {
        Message.create(message)
      })
    )
  })
