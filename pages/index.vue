<template>
  <div>
    <!-- <DummyBanner /> -->

    <div class="container">
      <main>
        <section>
          <h3>About Me</h3>
          <div class="introduction-box">
            <div class="introduction-icon">
              <a href="https://github.com/cwd-k2">
                <img src="https://github.com/cwd-k2.png" height="150px" alt="GitHub Icon" />
              </a>
            </div>
            <div>
              <h4>何かハンドルネーム</h4>
              <p>ここに壮大な自分語りを書く予定</p>
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
  </div>
</template>

<style scoped>
h3 {
  margin: 2rem 0;
  padding-bottom: 3px;
}

p {
  margin: 0.8rem 0;
}

section {
  margin: 30px 0;
}

.introduction-box {
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width: 480px) {
  .introduction-box {
    flex-direction: column;
    align-items: center;
  }
  .introduction-icon {
    margin-bottom: 30px;
  }
}
</style>
