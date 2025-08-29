<script setup>
import { useRoute } from 'vue-router'
const props = defineProps({
  to: Object,
  class: String,
})
const route = useRoute()
</script>

<template>
  <router-link
    v-bind="props"
    :class="[props.class, { 'scrollspy-active': route.hash === props.to.hash }]"
  >
    <slot />
  </router-link>
</template>
