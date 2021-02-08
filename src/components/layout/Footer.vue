<template>
  <b-card-footer class="d-flex">
    <p class="mr-1">Developed by Alejandro Fernandez Huguet</p>
    <a href="https://github.com/alferguet" target="_blank">
      <b-icon-github class="mt-1" />
    </a>
  </b-card-footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { BIconGithub } from 'bootstrap-vue'
export default Vue.extend({
  name: 'Footer',
  components: { BIconGithub },
})
</script>

<style scoped>
p {
  margin-bottom: 0px;
}
</style>
