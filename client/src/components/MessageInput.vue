<template>
  <div id="chat-input">
    <form @submit="sendMessage">
      <input ref="inputField" autofocus v-model="message" type="text"/>
      <button :disabled="message === ''">Send</button>
    </form>
    <div class="error" v-html="error" />
    <br>
  </div>
</template>
<script>
import ConversationService from '@/services/ConversationService'

export default {
  data () {
    return {
      message: '',
      error: null
    }
  },
  methods: {
    async sendMessage (event) {
      event.preventDefault()
      try {
        await ConversationService.sendMessage(this.$route.params.id, {
          content: this.message
        })
      } catch (error) {
        this.error = error.response.data.error
      }
      this.message = ''
    }
  },
  mounted () {
    this.$refs.inputField.focus()
  }
}
</script>

<style scoped>
#chat-input {
  border-top: 1px solid black;
  background-color: 00bcd4;
  padding: 10px;
  display: flex;
}
form {
  display: flex;
  flex-grow: 1;
}
input {
  flex-grow: 1;
  margin-right: 10px;
  height: 2em;
  align-self: center;
  border: 1px solid black
}
</style>
