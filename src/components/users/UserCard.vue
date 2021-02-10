<template>
  <b-card no-body>
    <b-row align-v="center" align-h="between">
      <b-col cols="2"
        ><b-avatar variant="primary" size="lg" :text="initials" />
      </b-col>
      <b-col cols="8">
        <span class="d-flex justify-content-center pt-2">
          <b-icon-person-fill font-scale="2" class="pr-1" />
          <h3>{{ user.name }}</h3>
        </span>
        <span class="d-flex justify-content-center">
          <b-icon-mailbox font-scale="1.5" class="pr-1" />
          <p>{{ user.email }}</p>
        </span>
      </b-col>
    </b-row>
  </b-card>
</template>
<script lang="ts">
import { User } from '@/services/interfaces/user'
import Vue, { PropType } from 'vue'
import { BIconPersonFill, BIconMailbox } from 'bootstrap-vue'
export default Vue.extend({
  name: 'UserCard',
  props: {
    user: Object as PropType<User>,
  },
  components: { BIconPersonFill, BIconMailbox },
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
