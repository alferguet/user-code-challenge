<template>
  <b-container fluid id="app" class="h-100 px-0">
    <b-card class="vh-100" no-body>
      <navbar />
      <b-card-body class="vh-90 overflow-scroll">
        <router-view></router-view>
      </b-card-body>
      <main-footer />
    </b-card>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import MainFooter from '@/components/layout/Footer.vue'
export default Vue.extend({
  name: 'App',
  components: { Navbar, MainFooter },
})
</script>
>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.overflow-scroll {
  overflow-y: auto;
}
</style>
