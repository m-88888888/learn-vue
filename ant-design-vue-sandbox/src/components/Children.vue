<template>
  <!-- <button> -->
  <!--   <slot :item="item"></slot> -->
  <!-- </button> -->

  <ul>
    <li v-for="(item, index) in items">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
const items = ["💩", "fuga"];
</script>
