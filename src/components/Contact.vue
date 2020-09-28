<template>
  <div id="contact">
    <div class="contact-image place-image"></div>
    <form
      class="form-position form-size"
      v-on:submit.prevent="sendEmail"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="ease-in-sine"
    >
      <section class="input-wrapper">
        <input
          type="text"
          name="user_name"
          id="name"
          class="input-fields"
          placeholder="your name"
          required
        />

        <input
          type="email"
          name="email"
          id="user_email"
          class="input-fields"
          placeholder="email"
          required
        />
      </section>
      <section>
        <textarea
          class="input-fields"
          name="message"
          placeholder="enter message here"
        ></textarea>
      </section>
      <div class="contact-btn">
        <input type="submit" value="Send email" id="submit" />
      </div>
    </form>

    <div class="links">
      <div
        v-if="sentSucces"
        @click="sentSucces = false"
        class="modal"
        data-aos="fade-left"
        data-aos-anchor-placement="top-bottom"
        data-aos-easing="ease-in-sine"
      >
        <p>
          You have succesfully sent the massage, I will reply as soon as
          posible.
        </p>
      </div>
      <p
        class="link-support"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-easing="ease-in-sine"
      >
        You can also contact me on
        <a href="https://www.linkedin.com/in/raul-octavian-albu/" target="blank"
          ><span class="link-color">Linkedin</span></a
        >
      </p>

      <p
        class="link-support"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-easing="ease-in-sine"
      >
        or you can follow me on
        <a
          href="https://github.com/raul-octavian"
          aria-label="Follow @raul-octavian on GitHub"
          target="blank"
          ><span class="link-color">Github</span></a
        >
      </p>
      <p
        class="link-support"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-easing="ease-in-sine"
      >
        or you can
        <a href="/Raul-Octavian-Albu-CV.pdf" target="blank">
          <span class="link-color">download my CV</span>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      sentSucces: true
    };
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "gmail",
          "template_7JzIFxzP",
          e.target,
          "user_LUUEYiIRn5R6Bw8Fwtxmu"
        )
        .then(
          result => {
            this.sentSucces = true;
            console.log(result);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
#contact {
  background-color: var(--secondary);
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  position: relative;
  box-sizing: border-box;
}
.contact-image {
  grid-column: 1 / 3;
  grid-row: 1 / 6;
}
.place-image {
  background: url("../assets/walking-in-vienna.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.links {
  grid-column: 3/ 6;
  grid-row: 4 / 5;
  text-align: right;
  padding: 3rem;
  position: relative;
  p {
    font-size: 0.9rem;
  }
}
.link-support {
  color: var(--primary);
  button {
    border: none;
    background: transparent;
    font-size: inherit;
    color: var(--contactLink);
    outline: none;
    &:hover {
      cursor: pointer;
    }
  }
  a {
    color: var(--contactLink);
  }
}
.form-position {
  grid-column: 3/ 6;
  grid-row: 1 / 4;
}
.form-size {
  min-width: 300px;
  padding: 3rem;
}
.input-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
textarea {
  width: 100%;
  min-height: 200px;
}

input {
  width: 40%;
}

.input-fields {
  border: none;
  border-bottom: 2px solid var(--primary);
  background-color: transparent;
  margin: 20px 0;
  padding: 10px 0;
  color: var(--primary);
  font-size: 0.8rem;

  &:hover {
    border-bottom: 2px solid var(--primary);
  }
  &::placeholder {
    color: var(--contactLink);
  }
  &:focus,
  &:focus-visible,
  &:visited,
  &:active {
    color: var(--contactLink);
    border-bottom: 2px solid var(--primary);
    background-color: transparent;
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-animation: autofill 0s forwards;
  animation: autofill 0s forwards;
}
input:-internal-autofill-selected {
  background-color: transparent;
}

@keyframes autofill {
  100% {
    background: transparent;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }
}

@-webkit-keyframes autofill {
  100% {
    background: transparent;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }
}

.contact-btn {
  position: relative;
  display: inline-block;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -80%;
    height: 100%;
    width: 120%;
    background-color: var(--contactLink);
    transform: rotateZ(15deg);
  }
  &:hover {
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

#submit {
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: var(--contactLink);
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 2px solid;
  outline: none;
  width: 100%;
  &:hover {
    animation-name: color-change;
    animation-duration: 300ms;
    animation-timing-function: ease-in-out;
    color: var(--secondary);
  }
}
.modal {
  position: absolute;
  // left: 50%;
  top: 0;
  // transform: translateX(-50%);
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  background-color: var(--scondary);
  color: var(--codeLink);
  width: calc(100% - 6rem);
  border: 2px solid var(--codeLink);
  font-size: 0.8rem;

  p {
    padding: 0;
    margin: 0;
    text-align: left;
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 851px) {
  #contact {
    padding: 0 2rem;
    min-height: 100vh;
    grid-template-rows: repeat(2, 150px), 50px auto;
    grid-template-rows: auto;
    position: relative;
  }
  .contact-image {
    grid-column: 1 / 4;
    grid-row: 2/ 6;
  }
  .form-position {
    grid-column: 1/ 6;
    grid-row: 1 / 2;
  }
  .links {
    grid-column: 3/ 6;
    grid-row: 2 / 3;
    padding: 0;
  }
  textarea {
    width: 100%;
    min-height: 15vh;
  }
  .form-size {
    min-width: 100%;
    padding: 0;
  }
  .place-image {
    background-size: contain;
    background-position: top;
  }
  .modal {
    width: 100%;
    margin-top: -4rem;
  }
}

@media screen and (max-width: 851px) {
  .links {
    text-align: right;
    p {
      font-size: 0.6rem;
    }
  }
}
</style>
