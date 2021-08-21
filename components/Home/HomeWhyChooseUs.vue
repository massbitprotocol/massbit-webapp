<template>
  <section>
    <div class="container mx-auto space-y-10">
      <div class="grid md:grid-cols-2 items-center gap-10 md:gap-20">
        <div>
          <h3 class="text-neutral-darkest text-2xl font-bold sm:text-3xl">Decentralized blockchain gateway</h3>
          <p class="text-neutral-mid mt-4">
            Infura was outage once and it caused exchanges like Binance, Bithumb unable to send transactions to withdraw
            funds. A decentralized gateway run by the community like Bitcoin, Ethereum is needed to make sure the
            transactions are successfully submitted to a specific blockchain network.
          </p>
        </div>
        <img
          src="~assets/svg/why-choose-us-1.svg"
          width="910"
          height="662"
          alt="Decentralized blockchain gateway"
          class="max-w-full h-auto"
        />
      </div>
      <div class="grid md:grid-cols-2 items-center gap-10 md:gap-20">
        <div>
          <h3 class="text-neutral-darkest text-2xl font-bold sm:text-3xl">
            Decentralized backend to generate data insight or to do any generic computation for web3 app
          </h3>
          <p class="text-neutral-mid mt-4">
            Every web3 app currently needs a centralized service to mine blockchain data to provide the data insight to
            the app. It is not only an unreliable service as it can get outaged anytime as of centralization but also
            causes the redundancy of building such services from many apps. A decentralized backend protocol run by the
            community to organize specific data insight for blockchains is necessary for the web3 app.
          </p>
        </div>
        <img
          src="~assets/svg/why-choose-us-2.svg"
          width="910"
          height="662"
          alt="Decentralized backend to generate data insight or to do any generic computation for web3 app"
          class="max-w-full h-auto md:order-first"
        />
      </div>
      <div class="grid md:grid-cols-2 items-center gap-10 md:gap-20">
        <div>
          <h3 class="text-neutral-darkest text-2xl font-bold sm:text-3xl">Continuous fraud monitoring</h3>
          <p class="text-neutral-mid mt-4">
            On top of the decentralized gateway, we can monitor blockchain and p2p network for frauds such as eclipse
            0-confirmation attacks, eclipse attacks. And the service provides end-users, developers with protection and
            confidence in doing crypto transactions.
          </p>
        </div>
        <img
          src="~assets/svg/why-choose-us-3.svg"
          width="910"
          height="662"
          alt="Continuous fraud monitoring"
          class="max-w-full h-auto"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeWhyChooseUs',
};
</script>
