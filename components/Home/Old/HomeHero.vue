<template>
  <section class="bg-hero bg-no-repeat bg-cover bg-bottom pt-[80px]">
    <div class="container mx-auto">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div class="max-w-[655px]">
          <h2
            class="
              text-3xl
              font-bold
              text-neutral-darkest
              leading-tight
              sm:text-4xl sm:leading-15.5
              lg:text-3xl lg:leading-tight
              xl:text-4xl xl:leading-15.5
            "
          >
            Fully decentralized <br class="hidden lg:block" />
            for Defi and Web3 apps
          </h2>

          <p class="text-lg text-neutral-mid mt-5">
            An economic incentive infrastructure platform for blockchains to make web3 applications fully decentralized.
          </p>

          <NuxtLink
            :to="{ name: 'projects' }"
            class="
              mt-10
              px-7.5
              py-4
              rounded-full
              border border-primary
              inline-flex
              items-center
              space-x-1.5
              bg-primary
              text-white
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
                d="M17.707 9.29325L12.707 4.29325C12.316 3.90225 11.684 3.90225 11.293 4.29325C10.902 4.68425 10.902 5.31625 11.293 5.70725L14.586 9.00025H3C2.447 9.00025 2 9.44825 2 10.0002C2 10.5522 2.447 11.0002 3 11.0002H14.586L11.293 14.2933C10.902 14.6842 10.902 15.3162 11.293 15.7072C11.488 15.9022 11.744 16.0002 12 16.0002C12.256 16.0002 12.512 15.9022 12.707 15.7072L17.707 10.7073C18.098 10.3163 18.098 9.68425 17.707 9.29325Z"
              />
            </svg>
          </NuxtLink>
        </div>

        <img
          src="~assets/svg/home-hero.svg"
          width="618"
          height="591"
          class="mx-auto w-full h-auto max-w-sm sm:max-w-lg lg:max-w-2xl -mb-4"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHero',
};
</script>
