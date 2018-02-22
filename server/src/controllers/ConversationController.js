const {Conversation, Message, ConversationUser, User, sequelize} = require('../models')
const socketServer = require('../socketServer')

module.exports = {
  async index (req, res) {
    try {
      let conversations = await Conversation.findAll({
        attributes: ['name', 'id'],
        include: [{
          attributes: [],
          model: ConversationUser,
          where: {
            UserId: req.user.id
          }
        }]
      })
      res.send(conversations)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the conversations',
        message: err.message
      })
    }
  },
  async getMessages (req, res) {
    try {
      const conversationId = req.params.id
      let messages = await Message.findAll({
        where: {
          ConversationId: conversationId
        },
        include: [{
          attributes: ['id', 'email'],
          model: User
        }],
        order: [
          ['id', 'DESC']
        ],
        limit: 25
      })
      messages = messages.reverse()
      res.send(messages)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the conversations',
        message: err.message
      })
    }
  },
  async sendMessage (req, res) {
    const t = await sequelize.transaction()
    try {
      const conversationId = req.params.id
      let message = req.body
      message.UserId = req.user.id
      message.ConversationId = conversationId
      message = await Message.create(message, {transaction: t})
      socketServer.sendMessage(conversationId, message)
      await t.commit()
      res.send(message)
    } catch (err) {
      console.log(err.message)
      await t.rollback()
      res.status(500).send({
        error: 'an error has occured trying to post message',
        message: err.message
      })
    }
  }
}
