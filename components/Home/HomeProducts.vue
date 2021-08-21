<template>
  <section>
    <div class="container mx-auto text-center">
      <img src="~assets/svg/project-hero.svg" alt="Product Here" width="1084" height="684" class="mx-auto" />
      <h3 class="mt-15 font-bold text-neutral-darkest text-3xl">The MassBit Network</h3>
      <p class="mt-3 text-neutral-mid max-w-lg mx-auto">
        An open network producing the fastest, cheapest, most reliable way to access data for the crypto economy.
      </p>
      <div class="mt-10 inline-grid sm:grid-cols-2 items-center gap-7.5">
        <div>
          <h3 class="text-neutral-darker font-medium text-xl">My MassBit</h3>
          <p class="mt-2 text-neutral-grey">Create your projects and API keys</p>
          <NuxtLink
            :to="{ name: 'index' }"
            class="
              mt-5
              px-5
              py-2.5
              rounded-full
              border border-primary
              inline-flex
              items-center
              space-x-1.5
              text-primary text-sm
              font-bold
              hover:text-white hover:bg-primary
              focus:text-white focus:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2
              transition
              duration-150
              ease-out
            "
          >
            <span>My MassBit</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.707 9.29301L12.707 4.29301C12.316 3.90201 11.684 3.90201 11.293 4.29301C10.902 4.68401 10.902 5.31601 11.293 5.70701L14.586 9.00001H3C2.447 9.00001 2 9.44801 2 10C2 10.552 2.447 11 3 11H14.586L11.293 14.293C10.902 14.684 10.902 15.316 11.293 15.707C11.488 15.902 11.744 16 12 16C12.256 16 12.512 15.902 12.707 15.707L17.707 10.707C18.098 10.316 18.098 9.68401 17.707 9.29301Z"
              />
            </svg>
          </NuxtLink>
        </div>
        <img src="~assets/svg/my-massbit-wireframe.svg" width="450" height="264" alt="" />
      </div>
      <div class="mt-15 inline-grid sm:grid-cols-2 items-center gap-7.5">
        <div>
          <h3 class="text-neutral-darker font-medium text-xl">MassBit Explorer</h3>
          <p class="mt-2 text-neutral-grey">Explore MassBit and interact with the protocol</p>
          <NuxtLink
            :to="{ name: 'projects' }"
            class="
              mt-5
              px-5
              py-2.5
              rounded-full
              border border-primary
              inline-flex
              items-center
              space-x-1.5
              bg-primary
              text-white text-sm
              font-bold
              hover:bg-primary/80 hover:border-primary/80
              focus:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2
              transition
              duration-150
              ease-out
            "
          >
            <span>MassBit Explorer</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.707 9.29301L12.707 4.29301C12.316 3.90201 11.684 3.90201 11.293 4.29301C10.902 4.68401 10.902 5.31601 11.293 5.70701L14.586 9.00001H3C2.447 9.00001 2 9.44801 2 10C2 10.552 2.447 11 3 11H14.586L11.293 14.293C10.902 14.684 10.902 15.316 11.293 15.707C11.488 15.902 11.744 16 12 16C12.256 16 12.512 15.902 12.707 15.707L17.707 10.707C18.098 10.316 18.098 9.68401 17.707 9.29301Z"
              />
            </svg>
          </NuxtLink>
        </div>
        <img src="~assets/svg/massbit-explorer-wireframe.svg" width="450" height="264" alt="" class="sm:order-first" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeProducts',
};
</script>
