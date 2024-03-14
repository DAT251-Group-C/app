<template>
  <p>Signing out...</p>
</template>

<script lang="ts" setup>
import { supabase } from '@/plugins/supabase'
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

onMounted(async () => {
  authStore.clearSession()
  await supabase.auth.signOut()
  await router.push({ name: 'Index', query: { logout: 'true' } })
})
</script>
