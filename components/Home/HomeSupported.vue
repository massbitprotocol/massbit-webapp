<template>
  <section class="">
    <div class="h-[156px] bg-support-top bg-no-repeat bg-top bg-cover pointer-events-none"></div>

    <div class="bg-accent-yellow">
      <div class="container mx-auto text-center">
        <h3 class="font-bold text-3xl text-white">Supported Networks</h3>

        <div class="inline-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-7.5 justify-center items-center mt-10">
          <TheSupportedNetworkItem :image-url="require('~/assets/svg/network/ethereum.svg')" name="Ethereum" />
          <TheSupportedNetworkItem :image-url="require('~/assets/svg/network/bitcoin.svg')" name="Bitcoin" />
          <TheSupportedNetworkItem :image-url="require('~/assets/svg/network/binance-coin.svg')" name="Binance Coin" />
          <TheSupportedNetworkItem :image-url="require('~/assets/svg/network/polkadot.svg')" name="Polkadot" />
          <TheSupportedNetworkItem :image-url="require('~/assets/svg/network/bitcoin.svg')" name="Cardano" />
          <TheSupportedNetworkItem :image-url="require('~/assets/svg/network/harmony.svg')" name="Harmony" />
        </div>
      </div>
    </div>

    <div class="h-[236px] bg-support-bottom bg-no-repeat bg-bottom bg-cover pointer-events-none"></div>
  </section>
</template>

<script>
export default {
  name: 'HomeSupported',
};
</script>
