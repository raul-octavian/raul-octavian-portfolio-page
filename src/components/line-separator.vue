<template>
  <div class="display-flex-row">
    <div class="empty"></div>
    <div class="project-line-separator"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.display-flex-row {
  display: flex;
  justify-content: flex-start;

  .empty {
    flex-grow: 1;
  }
}
.project-line-separator {
  height: 2px;
  width: 80%;
  background-color: var(--accent);
  margin: 3rem 0;
  position: relative;
}
</style>
