<template>
  <div>
    <!-- <DummyBanner /> -->
    <main>
      <section>
        <div class="introduction-box">
          <div class="introduction-icon">
            <a href="https://github.com/cwd-k2">
              <img src="https://github.com/cwd-k2.png" height="auto" width="auto" alt="GitHub Icon" />
            </a>
          </div>
          <div class="introduction-content">
            <h4>k2 (@cwd-k2)</h4>
            <p>トーキョーでプログラミングをする仕事をしています</p>
            <p>趣味でもプログラミングしたりします</p>
          </div>
        </div>
      </section>

      <section>
        <h3>何か</h3>
      </section>

      <section>
        <h3>書く予定</h3>
      </section>

    </main>
  </div>
</template>

<style scoped>
h3 {
  margin: 2rem 0;
  padding-bottom: 3px;
  text-align: center;
}

h4 {
  margin-bottom: 2rem;
}

p {
  margin: 0.8rem 0;
}

section {
  margin-bottom: 30px;
}

.introduction-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.introduction-icon {
  margin-right: 30px;
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #999;
  border-radius: 50%;
  overflow: hidden;
}

.introduction-content {}

.introduction-icon img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 896px) {
  .introduction-box {
    flex-direction: column;
    align-items: center;
  }

  .introduction-icon {
    margin-right: 0;
    margin-bottom: 30px;
    height: 100px;
    width: 100px;
  }
}
</style>
