<template>
  <b-card-header header-tag="nav">
    <b-row align-h="between">
      <b-col cols="6">
        <h2>User Code Challenge</h2>
      </b-col>
      <b-col cols="4">
        <b-nav card-header pills>
          <b-nav-item
            v-for="route in routes"
            :key="route.name"
            :to="route.path"
            exact
            exact-active-class="active"
            >{{ route.name }}</b-nav-item
          >
        </b-nav>
      </b-col>
    </b-row>
  </b-card-header>
</template>

<script lang="ts">
import Vue from 'vue'
import { routes } from '@/router/routes'
export default Vue.extend({
  name: 'Navbar',
  data() {
    return {
      routes,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
