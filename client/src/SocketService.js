import io from 'socket.io-client'
import chatConstants from '../../shared/chatConstants'
import events from './events'
import Vue from 'vue'

export const eventChannel = new Vue()

export default {
  init () {
    this.socket = io('http://localhost:8081')

    this.socket.on(chatConstants.CHAT_MESSAGE_TO_CLIENT, (email, content, room, createdAt) => {
      eventChannel.$emit(events.NEW_MESSAGE_FROM_SERVER, {email, room, content, createdAt})
    })
  },
  joinConversation (conversationId) {
    this.socket.emit(chatConstants.JOIN_CONVERSATION, conversationId)
  },
  disconnect () {
    this.socket.disconnect()
    eventChannel.$off(events.SEND_MESSAGE)
  }
}
