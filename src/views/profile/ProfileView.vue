<template>
  <div class="pa-8">
    <h2>Profile</h2>
    <p v-if="user">{{ user.email }}</p>
    <p v-if="currentSession">{{ currentSession.access_token }}</p>
    <RouterLink to="/signout">
      <v-btn>Signout</v-btn>
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { user, currentSession } = storeToRefs(authStore)
</script>
