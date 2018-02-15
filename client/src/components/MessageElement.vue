<template>
  <div class="message">
    <span class="message-user">
      {{ message.User.email }}
    </span>
    <span class="message-timestamp">
      {{ formatTimestamp(message.createdAt) }}
    </span>
    <div class="message-text">{{ message.content }}</div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: [
    'message'
  ],
  methods: {
    formatTimestamp (timestamp) {
      return moment(timestamp).format('MMM D h:mm')
    }
  }
}
</script>

<style scoped>
  .message {
    margin-bottom: 3px;
    background-color: #ccc
  }
  .message-user {
      vertical-align: middle;
      font-weight: bold;
      color: #00bcd4;
      font-size: 0.8em;
  }
  .message-timestamp {
      vertical-align: middle;
      color: black;
      font-size: 0.8em;
  }
</style>
