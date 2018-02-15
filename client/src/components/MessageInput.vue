<template>
  <div id="chat-input">
    <form @submit="sendMessage">
      <input ref="inputField" autofocus v-model="message" type="text"/>
      <button :disabled="message === ''">Send</button>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage (event) {
      event.preventDefault()
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
