<template>
  <header>
    <div class="container mx-auto">
      <div class="flex items-center justify-between py-5">
        <TheLogoDark />
        <TheNavigator class="hidden lg:block" />
        <TheLoginViaGithubButton class="hidden lg:block" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
