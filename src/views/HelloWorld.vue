<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const increment = () => {
  counterStore.increment()
}
</script>

<template>
  <div class="pa-8">
    <h2>Hello World!</h2>
    <p class="pb-2">{{ counterStore.count }}</p>
    <v-btn data-test="increment" @click="increment">Increment</v-btn>
  </div>
</template>
