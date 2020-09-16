<template>
  <section id="projects">
    <project></project>
    <line-sep></line-sep>
    <project> </project>
    <line-sep></line-sep>

    <project> </project>
  </section>
</template>

<script>
import project from "../components/project-element";
import lineSep from "../components/line-separator";
export default {
  components: {
    project: project,
    lineSep: lineSep
  }
};
</script>

<style lang="scss"></style>
