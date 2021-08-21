<template>
  <section>
    <div class="container mx-auto">
      <div class="text-center">
        <h3 class="text-neutral-darkest font-bold text-2xl sm:text-3xl">Massbit platform</h3>
        <p class="text-neutral-mid max-w-4xl mx-auto mt-3">
          Massbit platform incentivizes the community to run workers for doing the same tasks. That is to avoid the
          single point of failure and the incentives are to make sure they all behave well. Participants have to stake
          MBT tokens and do the work properly to get rewards. Otherwise, they will get slashed and lose their staked MBT
          tokens
        </p>
      </div>
      <div class="grid md:grid-cols-3 md:gap-4 lg:gap-22.5">
        <div class="text-center">
          <img src="~assets/svg/platform-1.svg" alt="" class="mx-auto" />
          <h3 class="text-lg text-neutral-mid mt-3">MassBit SDK</h3>
          <p class="text-sm text-neutral-grey mt-1.5">
            Open source SDK that allows you to create and run your own MassBit project. You have the power to build your
            own GraphQL API for your dApp and even run it yourself.
          </p>
        </div>

        <div class="text-center">
          <img src="~assets/svg/platform-2.svg" alt="" class="mx-auto" />
          <h3 class="text-lg text-neutral-mid mt-3">MassBit Projects</h3>
          <p class="text-sm text-neutral-grey mt-1.5">
            You can deploy your project to our high performance nodes. We’ll run and manage production infrastructure
            for your MassBit Project - for free!
          </p>
        </div>

        <div class="text-center">
          <img src="~assets/svg/platform-3.svg" alt="" class="mx-auto" />
          <h3 class="text-lg text-neutral-mid mt-3">MassBit Explorer</h3>
          <p class="text-sm text-neutral-grey mt-1.5">
            You can try out different MassBit Projects online on the Explorer, made by our community and hosted by us.
            Be inspired with what others are building, you might have the next big idea to give back
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePlatform',
};
</script>
