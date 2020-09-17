<template>
  <section id="projects">
    <div v-for="(project, index) in projects" :key="index">
      <project :project="{ project }"></project>
      <line-sep></line-sep>
    </div>
  </section>
</template>

<script>
import project from "../components/project-element";
import lineSep from "../components/line-separator";
import { mapGetters } from "vuex";
export default {
  components: {
    project: project,
    lineSep: lineSep
  },
  computed: {
    ...mapGetters({ projects: "getProjectContent" })
  }
};
</script>

<style lang="scss"></style>
