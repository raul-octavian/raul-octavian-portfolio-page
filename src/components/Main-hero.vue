<template>
  <section id="home">
    <div
      class="redCaseSet"
      data-aos="fade-right"
      data-aos-easing="ease-in-sine"
    >
      <div class="redLine redCaseLeft"></div>
      <div class="redLine redCaseTop"></div>
      <div class="redLine redCaseRight"></div>
      <div class="redLine redCaseBottom"></div>
      <h1>
        <span>RAUL</span>
        <span>OCTAVIAN</span>
        <span>ALBU</span>
      </h1>
      <h4 class="position-bottom-left">Web Developer</h4>
    </div>
    <div
      class="image-container"
      data-aos="fade-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <img
        src="../assets/mosaic-black-and-white-left.png"
        alt="mosaic image of Raul Octavian, the website's subject"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#home {
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
}

.redCaseSet {
  position: relative;
  height: 25rem;
  width: 25rem;
  box-sizing: border-box;
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  span {
    margin-right: 1.5rem;
  }
}
.redLine {
  position: absolute;
  height: 0.3rem;
  width: 100%;
  background-color: var(--accent);
}
.redCaseLeft {
  left: 0;
  height: 100%;
  width: 0.3rem;
}
.redCaseTop {
  top: 0;
  left: 0;
}
.redCaseRight {
  right: 0;
  height: 100%;
  width: 0.3rem;
}
.redCaseBottom {
  bottom: 0;
  right: 0;
  width: 50%;
}
.image-container {
  height: 35rem;
  border: 1px solid var(--accent);
  display: flex;
  justify-content: flex-end;
  img {
    height: 100%;
  }
}
.position-bottom-left {
  position: absolute;
  bottom: -0.3rem;
  margin: 0;
}

@media screen and (max-width: 769px) {
  .image-container {
    display: none;
  }
  .redCaseSet {
    height: 20rem;
    width: 20rem;
  }
}
@media screen and (max-width: 340px) {
  .image-container {
    display: none;
  }
  .redCaseSet {
    height: 13rem;
    width: 13rem;
  }
}
</style>
