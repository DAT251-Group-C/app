<template>
  <div class="pa-8">
    <h2>Hello World!</h2>
    <p class="pb-2">{{ counterStore.count }}</p>
    <v-btn data-test="increment" @click="increment">Increment</v-btn>

    <RouterLink v-if="isAuthenticated" to="profile">
      <v-btn>Profile</v-btn>
    </RouterLink>
    <v-btn v-else @click="login">Login</v-btn>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/services/auth'
import { useAuthStore } from '@/stores/auth'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)

const counterStore = useCounterStore()

const increment = () => {
  counterStore.increment()
}
</script>
