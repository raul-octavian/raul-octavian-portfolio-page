<template>
  <article class="project-element">
    <div
      class="redCaseSet position-name"
      data-aos="fade-right"
      data-aos-offset="250"
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
      data-aos-offset="150"
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
      data-aos-offset="300"
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
        width="663"
        height="373"
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
  min-height: 40vh;
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
  max-width: 30rem;
  a {
    display: block;
    height: 100%;
    width: 100%;

    .image {
      height: 100%;
      img {
        height: auto;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 769px) {
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
    height: 15rem;
    width: 15rem;
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
    min-width: 20rem;
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
</style>
