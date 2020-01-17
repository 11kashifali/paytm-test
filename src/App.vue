<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      fonts: false,
      colors: false,
      router: false,
      vuex: false
    }
  },
  watch: {
    fonts(value) {
      localStorage.fonts = value
    },
    colors(value) {
      localStorage.colors = value
    },
    router(value) {
      localStorage.router = value
    },
    vuex(value) {
      localStorage.vuex = value
    }
  },
  mounted() {
    this.checkLocalStorage("fonts")
    this.checkLocalStorage("colors")
    this.checkLocalStorage("router")
    this.checkLocalStorage("vuex")
  },
  methods: {
    clear() {
      localStorage.clear()
      this.checkLocalStorage("fonts")
      this.checkLocalStorage("colors")
      this.checkLocalStorage("router")
      this.checkLocalStorage("vuex")
    },

    checkLocalStorage(item) {
      if (localStorage[item]) {
        this[item] = JSON.parse(localStorage[item])
      } else {
        localStorage[item] = false
        this[item] = false
      }
    }
  }
}
</script>

<style src="./styles/main.css"></style>
