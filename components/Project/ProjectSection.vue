<template>
  <section class="py-14">
    <div class="container mx-auto">
      <h3 class="text-2xl font-bold sm:text-3xl">Community Projects</h3>

      <div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
};
</script>
