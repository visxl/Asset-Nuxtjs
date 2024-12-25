<template>
  <HeaderMenu />
  <SidebarMenu />
  <div class="relative md:w-full md:pl-11">
    <slot />
  </div>
</template>

<script>
definePageMeta({
  colorMode: 'light',
})
</script>
