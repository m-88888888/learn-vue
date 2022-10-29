<template>
  <Children>
    <template v-slot:default="slotProps">
      <h1>
        {{ slotProps.item }}
      </h1>
    </template>
  </Children>
</template>

<script setup lang="ts">
import Children from "./Children.vue";
</script>
