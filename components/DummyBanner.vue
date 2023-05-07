<template>
  <div class="outer">
    <div class="inner">
      <h2>製作中</h2>
      <p>内容は変わるよ</p>
    </div>
  </div>
</template>

<style scoped>
.outer {
  background-color: #1f1f1f;
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  width: 80%;
  max-width: 1000px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--refia-blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inner h2 {
  font-size: 4.5rem;
  line-height: 80px;
}

.inner p {
  font-size: 2rem;
}
</style>
