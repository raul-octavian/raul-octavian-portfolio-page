<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
:root {
  font-size: 20px;
  font-family: "Nova Square", cursive;
  box-sizing: border-box;
  --primary: #1f1f1f;
  --secondary: #e8e8e8;
  --accent: #c30000;
  --elementBg: #c4c4c4;
  --codeLink: #3aa538;
  --websiteLink: #d8b53d;
  --contactLink: #3da0d8;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--primary);
  min-height: 100vh;
  color: var(--secondary);
  padding: 0;
  margin: 0;
  overflow: hidden;
}
body {
  padding: 0;
  margin: 0;
}

section {
  margin: 0;
  padding: 0;
}

@keyframes btn-animation {
  0% {
    top: 50%;
    left: -80%;
  }
  90% {
    top: 5;
    left: -5%;
  }
  100% {
    top: 0;
    left: -10%;
  }
}

@keyframes color-change {
  100% {
    color: var(--secondary);
  }
}

@media screen and (max-width: 1500px) {
  :root {
    font-size: 17px;
  }
}
@media screen and (max-width: 1367px) {
  :root {
    font-size: 15px;
  }
}
@media screen and (max-width: 960px) {
  :root {
    font-size: 14px;
  }
}
@media screen and (max-width: 851px) {
  :root {
    font-size: 12px;
  }
}
@media screen and (max-width: 769px) {
  :root {
    font-size: 13px;
  }
}
@media screen and (max-width: 550px) {
  :root {
    font-size: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
