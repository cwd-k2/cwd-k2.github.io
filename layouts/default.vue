<template>
  <div style="display: flex; flex-direction: column; min-height: 100vh">
    <SiteHeader style="position: sticky; top: 0" />

    <div style="flex: 1">
      <slot />
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
* {
  color: var(--refia-brown);
}
</style>
