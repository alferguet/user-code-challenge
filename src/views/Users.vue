<template>
  <b-container fluid>
    <b-overlay :show="isLoading">
      <b-row align-h="center">
        <b-col cols="6">
          <b-table
            id="user-table"
            :fields="fields"
            :items="users"
            :per-page="perPage"
            :current-page="currentPage"
            thead-class="hidden-header"
          >
            <template #cell(user)="data">
              <user-card :user="data.item" />
            </template>
          </b-table>
          <b-pagination
            v-model="currentPage"
            :total-rows="totalUsers"
            align="center"
            :per-page="perPage"
            aria-controls="user-table"
          ></b-pagination>
        </b-col>
      </b-row>
    </b-overlay>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import UserCard from '@/components/users/UserCard.vue'
import { User } from '@/services/interfaces/user'
import { fetchUsers } from '@/services/users'

export default Vue.extend({
  name: 'Users',
  data: () => {
    return {
      users: [] as User[],
      fields: ['user'],
      isLoading: false,
      perPage: 5,
      currentPage: 1,
    }
  },
  components: { UserCard },
  created() {
    this.fetchUsers().catch(() => {
      this.createErrorToast(
        'Screen loading',
        'There has been an error setting up the screen.',
      )
    })
  },
  computed: {
    totalUsers(): number {
      return this.users.length
    },
  },
  methods: {
    async fetchUsers(): Promise<void> {
      try {
        this.isLoading = true
        this.users = await fetchUsers()
      } catch (err) {
        this.createErrorToast(
          'User fetching',
          'There has been an error fetching the users.',
        )
      } finally {
        this.isLoading = false
      }
      this.users.push({
        id: 1,
        name: 'Alejandro Perez',
        email: 'afernandezh@protonmail.com',
      })
    },
    createErrorToast(title: string, message: string) {
      this.$bvToast.toast(message, {
        title,
        variant: 'danger',
      })
    },
  },
})
</script>
<style>
.hidden-header {
  display: none;
}
</style>
