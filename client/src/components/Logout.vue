<template>
<div>
  Logout
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
    }
  },
  created:
    function () {
      try {
        AuthenticationService.logout()
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'dashboard'
        })
      } catch (error) {
        console.log(error)
        this.$router.push({
          name: 'root'
        })
      }
    }
}
</script>

<style scoped>
</style>
