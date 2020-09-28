<template>
  <article class="project-element">
    <div
      class="redCaseSet position-name"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div class="redLine redCaseLeft display"></div>
      <div class="redLine redCaseTop display"></div>
      <div class="redLine redCaseRight display"></div>
      <div class="redLine redCaseBottom display"></div>
      <h3>
        <span v-for="(name, index) in project.project.name" :key="index">
          {{ name }}
        </span>
      </h3>
    </div>

    <div
      class="project-text-container small-font-about position-text"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div>
        <p
          class="description"
          v-for="(desc, index) in project.project.description"
          :key="index"
        >
          {{ desc }}
        </p>
      </div>
      <div class="button-wrapper">
        <a :href="project.project.websiteLink" target="blank">
          <button class="link-btn live-website-access">
            <p
              v-if="project.project.name[0] === 'Water'"
              @click.prevent="isVideo(project.project.name[0])"
            >
              Play video
            </p>
            <p v-else>Website</p>
          </button>
        </a>
        <a :href="project.project.codeLink" target="blank">
          <button class="link-btn gitHub-access">Repository</button>
        </a>
      </div>
    </div>
    <div
      class="project-image-wrapper position-image"
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
    >
      <a>
        <div class="image">
          <img :src="project.project.imageURL" alt />
        </div>
      </a>
    </div>

    <div class="video-container" v-if="showVideo">
      <iframe
        width="320"
        height="180"
        src="https://www.youtube.com/embed/5NYV_mr4IfM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button @click="showVideo = false" class="close-btn">close Window</button>
    </div>
  </article>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showVideo: false
    };
  },
  computes: {},
  methods: {
    isVideo(item) {
      if (item === "Water") {
        this.showVideo = true;
        console.log(item);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.project-element {
  margin: 0;
  padding: 0;
}
.close-btn {
  color: var(--accent);
  border: 1px solid var(--accent);
  position: absolute;
  bottom: 0;
  right: 0;
}
.video-container {
  width: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
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
  gap: 0 6rem;
  grid-template-areas:
    "name name"
    "text image";
  // min-height: 40vh;
}
.position-title {
  grid-area: name;
}
.position-text {
  grid-area: text;
}
.position-image {
  grid-area: image;
  justify-self: end;
}
.project-text-container {
  background-color: var(--secondary);
  color: var(--primary);
  padding: 1rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}
.description {
  padding: 0;
  margin: 0;
  &::first-line {
    text-indent: 1rem;
  }
}

.button-wrapper {
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  align-self: flex-end;

  p {
    padding: 0;
    margin: 0;
  }
}

.link-btn {
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 2px solid;
  border-radius: 5px;
  font-size: 0.8rem;
  position: relative;
  font-weight: 600;
}

.live-website-access {
  border-color: var(--websiteLink);
  color: var(--websiteLink);
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -80%;
    height: 100%;
    width: 120%;
    background-color: var(--websiteLink);
    transform: rotateZ(15deg);
  }
  &:hover {
    animation-name: color-change;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    color: var(--secondary);
    &::before {
      animation-name: btn-animation;
      animation-duration: 300ms;
      animation-timing-function: ease-in-out;
      top: 0;
      left: -10%;
      z-index: -1;
    }
  }
}

.gitHub-access {
  border-color: var(--codeLink);
  color: var(--codeLink);
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -80%;
    height: 100%;
    width: 120%;
    background-color: var(--codeLink);
    transform: rotateZ(15deg);
  }
  &:hover {
    animation-name: color-change;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    color: var(--secondary);
    &::before {
      animation-name: btn-animation;
      animation-duration: 300ms;
      animation-timing-function: ease-in-out;
      top: 0;
      left: -10%;
      z-index: -1;
    }
  }
}
.project-image-wrapper {
  max-width: 100%;
  a {
    display: block;
    height: 100%;
    width: 100%;

    .image {
      width: 100%;
      img {
        height: auto;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 1367px) {
  .project-element {
    grid-template-areas:
      "name image"
      "text text";
    gap: 1rem 1rem;
  }
  .display {
    display: block;
  }
  .redCaseSet {
    height: 18rem;
    width: 18rem;
  }
  h3 {
    display: flex;
    flex-direction: column;
    span {
      margin-right: 0;
      font-size: 2rem;
    }
  }
  .project-image-wrapper {
    width: 100%;
    a {
      display: block;
      height: 100%;
      width: 100%;

      .image {
        width: 100%;
        image {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 769px) {
  .redCaseSet {
    height: 12rem;
    width: 12rem;
  }
  h3 {
    span {
      font-size: 1.5rem;
    }
  }
  .project-image-wrapper {
    min-width: 15rem;
  }
}

@media screen and (max-width: 550px) {
  .redCaseSet {
    height: 10rem;
    width: 10rem;
  }
  h3 {
    span {
      font-size: 1.2rem;
    }
  }
  .description {
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
    &::first-line {
      text-indent: 1rem;
    }
  }
}
@media screen and (max-width: 340px) {
  .redCaseSet {
    height: 8rem;
    width: 8rem;
  }
  h3 {
    span {
      font-size: 0.9rem;
    }
  }
  .project-image-wrapper {
    min-width: 8rem;
  }
}
</style>
