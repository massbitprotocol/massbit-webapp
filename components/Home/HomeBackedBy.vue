<template>
  <section>
    <div class="container mx-auto text-center">
      <h3 class="font-bold text-neutral-darkest text-3xl">We are backed by</h3>
      <div class="mt-10 inline-grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-flow-col gap-7.5">
        <TheBackedByItem :image-url="require('~/assets/svg/backed/framework.svg')" name="Framework" />
        <TheBackedByItem :image-url="require('~/assets/svg/backed/reciprocal.svg')" name="Reciprocal" />
        <TheBackedByItem :image-url="require('~/assets/svg/backed/momentum-6.svg')" name="Momentum 6" />
        <TheBackedByItem :image-url="require('~/assets/svg/backed/genesis-builder.svg')" name="Genesis Builder" />
        <TheBackedByItem :image-url="require('~/assets/svg/backed/collider.svg')" name="Collider" />
        <TheBackedByItem :image-url="require('~/assets/svg/backed/122-west.svg')" name="122 West" />
        <TheBackedByItem :image-url="require('~/assets/svg/backed/compound.svg')" name="Compound" />
        <TheBackedByItem :image-url="require('~/assets/svg/backed/coinfund.svg')" name="Coinfund" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBackedBy',
};
</script>
