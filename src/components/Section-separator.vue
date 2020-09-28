<template>
  <div
    class="section-separator"
    data-aos="fade-left"
    data-aos-easing="ease-in-sine"
  >
    <div class="sep-text-container"><slot></slot></div>

    <div class="line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section-separator {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}
.line {
  height: 5px;
  width: 100%;
  background-color: var(--accent);
  flex: 8;
}
.sep-text-container {
  flex: 2;
}

@media screen and (max-width: 1337px) {
  .line {
    flex: 6;
    height: 2px;
  }
  .sep-text-container {
    flex: 3;
  }
  .section-separator {
    margin: 1.5rem 0;
  }
}
</style>
