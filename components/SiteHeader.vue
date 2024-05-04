<template>
  <header>
    <div class="container">
      <h1 class="logo">
        <NuxtLink to="/">cwd-k2's Homepage</NuxtLink>
      </h1>

      <nav class="header-nav">
        <ul>
          <li>
            <NuxtLink to="/blog">BLOG</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/works">WORKS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/links">LINKS</NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="header-nav-sp">
        <SpModalMenu />
      </nav>
    </div>
  </header>
</template>

<style scoped>
h1 {
  line-height: 2rem;
}

header {
  background-color: white;
  width: 100%;
  box-shadow: 0 1px 2px #aaa;
}

header .container {
  margin: 0 auto;
  height: 6rem;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  margin-left: 20px;
}

header .logo a {
  font-size: 2rem;
}

.header-nav {
  width: 30%;
  max-width: 300px;
}

.header-nav>ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.header-nav>ul li {
  font-size: 1.6rem;
  line-height: 1.6rem;
}

.header-nav-sp {
  display: none;
}

@media screen and (max-width: 896px) {
  .header-nav {
    display: none;
  }

  .header-nav-sp {
    display: block;
    margin-right: 20px;
  }
}
</style>
