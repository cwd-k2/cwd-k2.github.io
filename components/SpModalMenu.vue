<script lang="ts" setup>
import { ref, onMounted } from "vue";

const show = ref(false);

const open = () => {
  show.value = true;
};

const close = () => {
  show.value = false;
};

onMounted(() => {
  window.addEventListener("resize", () => {
    if (show.value) show.value = false;
  });
});
</script>

<template>
  <nav>
    <button>
      <span class="material-icons" @click="open">menu</span>
    </button>

    <Transition>
      <div class="modal-area" v-if="show">
        <div class="modal-background" @click="close"></div>

        <div class="modal-content">
          <button class="modal-close" @click="close">
            <span class="material-icons">close</span>
          </button>

          <ul>
            <li>
              <NuxtLink @click="close" to="/">HOME</NuxtLink>
            </li>
            <li>
              <NuxtLink @click="close" to="/blog">BLOG</NuxtLink>
            </li>
            <li>
              <NuxtLink @click="close" to="/works">WORKS</NuxtLink>
            </li>
            <li>
              <NuxtLink @click="close" to="/links">LINKS</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.material-icons {
  font-size: 3rem;
  line-height: 3rem;
}

.modal-area {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-background {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}

.modal-content {
  background-color: white;
  width: 80%;
  z-index: 2;
  position: relative;
  padding: 20px;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: center;
}

.modal-content ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.modal-content ul li {
  border-bottom: solid 2px var(--refia-brown);
  margin: 20px 0;
}

.modal-content ul li a {
  font-size: 2.4rem;
}
</style>
