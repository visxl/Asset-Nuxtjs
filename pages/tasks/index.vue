<template>
  <div class="flex flex-col w-full bg-muted/40">
    <main class="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <Task />
    </main>
  </div>
</template>

<script setup>
import Task from '~/composables/table/task.vue';

</script>
