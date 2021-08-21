<template>
  <section>
    <div class="container mx-auto text-center">
      <div class="">
        <h3 class="text-neutral-darkest font-bold text-2xl sm:text-3xl">On a shared neutral foundation</h3>
        <p class="text-neutral-mid max-w-lg mx-auto mt-3">
          By combining Web3 protocols, developers can build dApps with powerful new features for solving the world's
          greatest challenges.
        </p>
      </div>

      <div class="inline-grid grid-cols-2 md:grid-cols-4 mt-7.5">
        <TheFeatureItem
          description="Guaranteed to run forever on reliable public infrastructure"
          name="Easy to Use"
          :image-url="require('~/assets/svg/feature/easy-to-use.svg')"
        />

        <TheFeatureItem
          description="Guaranteed to run forever on reliable public infrastructure"
          name="Reliability"
          :image-url="require('~/assets/svg/feature/reliability.svg')"
        />

        <TheFeatureItem
          description="Safe, secure, and private"
          name="Security"
          :image-url="require('~/assets/svg/feature/security.svg')"
        />

        <TheFeatureItem
          description="Transparent rules that people have a voice in"
          name="Governance"
          :image-url="require('~/assets/svg/feature/governance.svg')"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeFeatures',
};
</script>
