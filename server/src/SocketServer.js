let chatConstants = require('../../shared/chatConstants')
let toolbox = require('./utils/Toolbox')
const Server = require('socket.io')

let io

exports.sendMessage = function sendMessage (conversation, message) {
  io.sockets.in(conversation).broadcast(chatConstants.CHAT_MESSAGE_TO_CLIENT, 'dupa@dupa.pl', 'test test test', conversation, '2016-02-02 00:00:00')
}

exports.init = function init (server) {
  io = new Server(server)

  io.on(chatConstants.CONNECTION, socket => {
    socket.on(chatConstants.JOIN_CONVERSATION, function (conversation) {
      socket.join(conversation)
      toolbox.logData('joining conversation ' + conversation + ' socketid: ' + socket.id)
    })

    socket.on(chatConstants.DISCONNECT, () => {
      toolbox.logData('user disconnected ' + socket.id)
    })
  })
}
