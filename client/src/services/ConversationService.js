import Api from '@/services/Api'

export default {
  index (credentials) {
    return Api().get('conversation', credentials)
  },
  show (conversationId) {
    return Api().get(`conversation/${conversationId}`)
  },
  sendMessage (conversationId, message) {
    return Api().post(`conversation/${conversationId}/sendMessage`, message)
  }
}
