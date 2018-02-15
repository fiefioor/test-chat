<template>
<div id="content">
  <div id="chat-messages">
    <div v-for="message in messages" :key='message.id'>
      <message-element :message="message"></message-element>
    </div>
  </div>
  <message-input />
</div>
</template>
<script>
import ConversationService from '@/services/ConversationService'
import MessageElement from '@/components/MessageElement'
import MessageInput from '@/components/MessageInput'
export default {
  components: {
    MessageElement,
    MessageInput
  },
  data () {
    return {
      messages: []
    }
  },
  async mounted () {
    this.messages = (await ConversationService.show(this.$route.params.id)).data
  }
}
</script>

<style scoped>
#chat-messages {
    flex-grow: 1;
    overflow-y: scroll;
    padding: 1em;
}
</style>
