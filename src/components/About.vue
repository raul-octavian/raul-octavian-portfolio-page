<template>
  <section id="about">
    <div class="about-top">
      <p class="bigger-font-about margin-left-negative">My motto:</p>
      <p class="bigger-font-about text-center">
        “The world is as we make it, and we are responsible to make it great”
      </p>
    </div>
    <div class="about-mid-section">
      <p class="small-font-about mid-sec-element">
        I am a multimedia student who loves to code. I dedicated my attention to
        creating a solid foundation in VueJs, VueX, and Firestore. While my
        focus was on coding, I had the opportunity and pleasure to assume roles
        from illustrator to director and actor.
      </p>

      <div class="verical-line"></div>

      <p class="small-font-about mid-sec-element">
        My INTJ-A aka “The Architect” personality and idealistic view of the
        world around me combined with optimistic nature push me towards
        achieving the impossible.
      </p>

      <div class="verical-line"></div>

      <p class="small-font-about mid-sec-element">
        I consider life to be about learning and self-actualization, that's why
        I embarked on this journey so late in my life. I have so much to offer,
        so many dreams to fulfil, so many people to help.
      </p>
    </div>
    <div class="about-bottom">
      <p class="bigger-font-about text-center">
        I am passionate about website development and especially the logic and
        intriguing pieces that come together to form the ever-evolving and the
        extraordinary digital universe that we call the World Wide Web.
      </p>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.about-top,
.about-bottom {
  width: 50%;
  margin: 0 auto;
}
.bigger-font-about {
  font-size: 1.5rem;
}
.margin-left-negative {
  margin-left: -3rem;
}
.center {
  text-align: center;
}
.about-mid-section {
  padding: 3rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //   display: grid;
  //   grid-template-columns: 1fr 3px 1fr 3px 1fr;
  p {
    width: 60%;
  }
}
.small-font-about {
  font-size: 1rem;
}

.mid-sec-element {
  //   display: flex;
  //   justify-content: space-around;
  //   position: relative;
  flex: 1;

  //   &::after {
  //     position: absolute;
  //     content: "";
  //     height: 100%;
  //     width: 2px;
  //     background-color: var(--accent);
  //     left: 0;
  //   }

  //   &:first-child {
  //     &::after {
  //       display: none;
  //     }
  //   }
}
.verical-line {
  height: 200px;
  width: 3px;
  background-color: var(--accent);
  margin: 0 6rem;
}

.el-one {
  justify-content: flex-start;
}
</style>
