<template>
  <b-card no-body>
    <b-row align-v="center" align-h="between">
      <b-col cols="3"
        ><b-avatar variant="primary" size="lg" :text="initials" />
      </b-col>
      <b-col cols="8">
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </b-col>
    </b-row>
  </b-card>
</template>
<script lang="ts">
import { User } from '@/services/interfaces/user'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  name: 'UserCard',
  props: {
    user: Object as PropType<User>,
  },
  computed: {
    initials(): string {
      if (this.user?.name) {
        return this.user.name
          .split(' ')
          .map(name => name[0])
          .join('')
      }
      return ''
    },
  },
})
</script>
