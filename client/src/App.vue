<template>
  <div id="app">
    <v-app>
      <page-header />
      <main v-if="isLoggedIn">
        <v-container fluid>
          <v-layout row wrap>
        <v-flex xs2>
          <div class="vertical-menu">
          <div v-for="(item, index) in items" :key='index'>
            <router-link :to="{name: 'conversation', params: {id: item.id}}" exact-active-class="active">
              {{item.name}}
              </router-link>
          </div>
          </div>
        </v-flex>
        <v-flex xs10>
          <router-view :key="$route.fullPath"></router-view>
        </v-flex>
      </v-layout>
        </v-container>
      </main>
      <main v-else>
        <v-container fluid>
          <router-view :key="$route.fullPath"></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import ConversationService from '@/services/ConversationService'
import Store from '@/store/store'

export default {
  name: 'App',
  components: {
    PageHeader
  },
  data () {
    return {
      items: []
    }
  },
  async mounted () {
    this.items = (await ConversationService.index()).data
  },
  computed: {
    isLoggedIn () {
      return Store.state.isUserLoggedIn
    }
  },
  watch: {
    async isLoggedIn () {
      if (Store.state.isUserLoggedIn) {
        this.items = (await ConversationService.index()).data
      }
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vertical-menu a {
    background-color: #424242;
    color: white;
    display: block;
    padding: 12px;
    text-decoration: none;
}

.vertical-menu a:hover {
    background-color: #ccc;
    color: black;

}

.vertical-menu a.active {
    background-color: #00bcd4;
    color: white;
}
</style>
