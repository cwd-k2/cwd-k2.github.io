<template>
  <div style="
    display: flex;
    flex-direction: column;
    min-height: 100svh;">

    <SiteHeader style="position: sticky; top: 0" />

    <div class="container" style="flex: 1">
      <slot />
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 60px;
}

@media screen and (max-width: 896px) {
  .container {
    padding: 0 50px;
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding: 0 40px;
  }
}
</style>