<template>
  <div>
    <TheHeader class="fixed z-10 inset-x-0 top-0 bg-primary-background" />

    <main class="">
      <Nuxt />
    </main>

    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'LayoutHome',
};
</script>
