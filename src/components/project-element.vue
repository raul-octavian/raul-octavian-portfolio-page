<template>
  <article class="project-element">
    <div class="redCaseSet position-name">
      <div class="redLine redCaseLeft display"></div>
      <div class="redLine redCaseTop display"></div>
      <div class="redLine redCaseRight display"></div>
      <div class="redLine redCaseBottom display"></div>
      <h3>
        <span>EASV</span>
        <span>Canteen</span>
        <span>project</span>
      </h3>
    </div>

    <div class="project-text-container small-font-about position-text">
      <p>
        This school project had as a subject the school canteen. Our job was to
        evaluate its services and the UX of its customers and try to improve it
        in the digital environment. After doing our research: interviews and
        observations, our findings showed that the biggest problem was the
        narrow communication channel that the canteen was using(printed paper).
        This was limiting their reach. As a result, we decided to create a
        website for the organization that would exponentially improve their
        communication capabilities and its reach in the student community. The
        goal of the project was to create a wireframe for our solution. I went a
        bit further and made a prototype webpage
      </p>
      <div class="button-wrapper">
        <a href="https://easvcanteen.netlify.app/" target="blank"
          ><button class="link-btn live-website-access">
            Website
          </button></a
        >
        <a
          href="https://github.com/raul-octavian/canteen-project"
          target="blank"
          ><button class="link-btn gitHub-access">
            Repository
          </button></a
        >
      </div>
    </div>
    <div class="project-image-wrapper position-image">
      <a href="https://easvcanteen.netlify.app/" target="blank">
        <div class="image"></div>
        <!-- <img
            src="../assets/easv-canteen -screenshot.png"
            alt="EASV project screenshot"
        /> -->
      </a>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.display {
  display: none;
}
.redCaseSet {
  height: auto;
}
h3 {
  color: var(--secondary);
  span {
    margin-right: 1rem;
  }
}
.project-element {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  gap: 0 10rem;
  grid-template-areas:
    "name name"
    "text image";
  min-height: 60vh;
}
.position-title {
  grid-area: name;
}
.position-text {
  grid-area: text;
}
.position-image {
  grid-area: image;
}
.project-text-container {
  background-color: var(--secondary);
  color: var(--primary);
  padding: 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.button-wrapper {
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
}

.link-btn {
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 2px solid;
  border-radius: 5px;
  font-size: 0.8rem;
}

.live-website-access {
  border-color: var(--websiteLink);
  color: var(--websiteLink);
}
.gitHub-access {
  border-color: var(--codeLink);
  color: var(--codeLink);
}
.project-image-wrapper {
  min-width: 350px;
  a {
    display: block;
    height: 100%;
    width: 100%;

    .image {
      width: 100%;
      height: 100%;
      background: url("../assets/easv-canteen -screenshot.png");
      background-position: center;
      background-size: cover;
    }
  }
}
</style>
