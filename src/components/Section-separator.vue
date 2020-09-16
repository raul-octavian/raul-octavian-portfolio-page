<template>
  <div class="section-separator">
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
  margin: 3rem 0;
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
</style>
