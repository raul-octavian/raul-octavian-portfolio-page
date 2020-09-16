<template>
  <div id="contact">
    <div class="contact-image place-image"></div>
    <form class="form-position form-size" @submit.prevent="sendEmail">
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
      <input type="submit" value="Send email" id="submit" />
    </form>

    <div class="links">
      <div v-if="sentSucces" class="modal">
        <p>
          You have succesfully sent the massage, I will reply as soon as
          posible.
        </p>
      </div>
      <p class="link-support">
        You can also contact me on
        <a href="https://www.linkedin.com/in/raul-octavian-albu/" target="blank"
          ><span class="link-color">Linkedin</span></a
        >
      </p>

      <p class="link-support">
        or you can follow me on
        <a
          href="https://github.com/raul-octavian"
          aria-label="Follow @raul-octavian on GitHub"
          target="blank"
          ><span class="link-color">Github</span></a
        >
      </p>
      <p class="link-support">
        or you can
        <a
          download
          href="../../public/CV/Raul-Octavian-Albu-CV.pdf"
          target="blank"
        >
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
      sentSucces: false
    };
  },
  methods: {
    sendEmail: e => {
      console.log(e);
      emailjs
        .sendForm(
          "gmail",
          "template_7JzIFxzP",
          e.target,
          "user_LUUEYiIRn5R6Bw8Fwtxmu"
        )
        .then(
          result => {
            alert("Email succesfully sent", result.status, result.text);
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
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: relative;
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
  min-height: 30vh;
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

#submit {
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: var(--contactLink);
  border-radius: 5px;
  font-size: 0.8rem;
  border: 2px solid;
}

.modal {
  // position: absolute;
  // left: 50%;
  // top: 2rem;
  // transform: translateX(-50%);
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  background-color: var(--scondary);
  color: var(--codeLink);
  width: 100%;
  border: 2px solid var(--codeLink);
  font-size: 0.8rem;

  p {
    padding: 0;
    margin: 0;
  }
}
</style>
