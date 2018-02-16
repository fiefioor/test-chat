let http = require('http')
let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let morgan = require('morgan')
let {sequelize} = require('./models')
let config = require('./config/config')
let toolbox = require('./utils/Toolbox')
let chatConstants = require('../../shared/chatConstants')

let app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./passport')
require('./routes')(app)

sequelize.sync({force: false})
  .then(() => {
    let server = http.createServer(app)
    server.listen(config.port)
    let io = require('socket.io')(server)

    io.sockets.on('connection', function (socket) {
      socket.on(chatConstants.JOIN_CONVERSATION, function (room) {
        socket.join(room)
        toolbox.logData('joining room ' + room + ' socketid: ' + socket.id)
        //  { emial: 'socket@io', createdAt: '2016-01-01 00:00:00', content: 'eldo na wolno socket test', id: 1003001 }
        io.sockets.in(room).emit(chatConstants.CHAT_MESSAGE_TO_CLIENT, 'dupa@dupa.pl', 'test test test', room, '2016-02-02 00:00:00')
        toolbox.logData('after emit')
      })

      socket.on(chatConstants.LEAVE_CONVERSATION, function (room) {
        toolbox.logData('leaving room ' + room)
        socket.leave(room)
      })

      socket.on(chatConstants.CHAT_MESSAGE_FROM_CLIENT, function (data) {
        toolbox.logData('sending message')
        io.sockets.in(data.room).emit('message', data)
      })
    })

    toolbox.logData(`Server started on port ${config.port}`)
  })
