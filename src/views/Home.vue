<template>
  <div class="grid-system">
    <div class="grid-centered-6">
      <Navigation> </Navigation>
    </div>
    <div class="grid-centered-6">
      <Hero></Hero>
    </div>
    <div class="grid-centered-6">
      <separator>
        <h2>ABOUT ME</h2>
      </separator>
    </div>
    <div class="grid-centered-6">
      <About></About>
    </div>
    <div class="grid-centered-6">
      <separator>
        <h2>PROJECTS</h2>
      </separator>
    </div>
    <div class="grid-centered-6">
      <Projects></Projects>
    </div>
    <div class="grid-centered-6">
      <separator>
        <h2>CONTACT</h2>
      </separator>
    </div>
    <div class="grid-centered-7">
      <Contact> </Contact>
    </div>
  </div>
</template>

<style lang="scss">
.grid-system {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
  padding: 0;
  margin: 0;
}
.grid-centered-6 {
  grid-column: 2 / span 6;
}
.grid-centered-7 {
  grid-column: 2 / span 7;
}
h2,
h3,
h4 {
  color: var(--accent);
}

h1 {
  color: var(--secondary);
  font-size: 3.5rem;
  display: flex;
  flex-direction: column;
}

h4 {
  font-size: 0.8rem;
}

a {
  text-decoration: none;
}
button {
  &:hover {
    cursor: pointer;
  }
}

@media screen and (max-width: 1367px) {
  .grid-system {
    grid-template-columns: repeat(12, 1fr);
  }
  .grid-centered-6 {
    grid-column: 2 / span 10;
  }
  .grid-centered-7 {
    grid-column: 2 / span 10;
  }
  h2 {
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 1367px) {
  h1 {
    font-size: 2rem;
  }
}
</style>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation";
import Hero from "@/components/Main-hero";
import separator from "@/components/Section-separator";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
export default {
  name: "Home",
  components: {
    Navigation: Navigation,
    Hero: Hero,
    separator: separator,
    About: About,
    Projects: Projects,
    Contact: Contact
  }
};
</script>
