<template>
  <header class="header">
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1018.76 206.12">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <g id="logo">
              <path
                class="cls-1"
                d="M128.44.13H107.26v0H21.18v0H0L.21,204.8H128.65ZM107.28,20.31l.17,164.34H21.37L21.2,20.31Z"
              />
              <polygon
                class="cls-1"
                points="257.76 145.65 257.8 185.2 171.73 185.2 171.56 20.26 257.63 20.26 257.67 59.78 278.85 59.78 278.79 0 257.61 0 257.61 0.03 171.53 0.03 171.53 0 150.35 0 150.56 205.42 161.74 205.42 161.74 205.43 262.9 205.43 262.9 205.42 279 205.42 278.94 145.65 257.76 145.65"
              />
              <polygon
                class="cls-1"
                points="428.3 0.16 300.74 0.16 300.76 21.58 353.97 21.58 354.16 205.17 375.3 205.17 375.11 21.58 428.32 21.58 428.3 0.16"
              />
              <polygon
                class="cls-1"
                points="717.14 205.56 695.96 205.56 695.75 0.75 716.92 0.75 717.14 205.56"
              />
              <polygon
                class="cls-1"
                points="867.14 0.81 845.96 0.81 845.96 0.84 845.38 0.84 845.98 21 846.15 185.34 760.08 185.34 759.91 21 759.31 0.81 738.7 0.81 738.91 205.49 750.09 205.49 750.09 205.49 851.25 205.49 851.25 205.49 867.35 205.49 867.14 0.81"
              />
              <polygon
                class="cls-1"
                points="1018.28 60.47 1018.22 0.69 997.04 0.69 997.04 0.71 910.96 0.71 910.96 0.69 889.78 0.69 889.9 114.19 911.08 114.19 911.08 114.18 996.54 114.18 996.4 185.89 911.15 185.89 911.11 145.68 889.93 145.68 889.99 206.11 901.17 206.11 901.17 206.12 1002.33 206.12 1002.33 206.11 1018.43 206.11 1018.43 206.05 1018.51 206.05 1018.73 97.24 1018.76 92.52 911.06 92.52 910.98 20.95 997.06 20.95 997.1 60.47 1018.28 60.47"
              />
              <polygon
                class="cls-1"
                points="407.69 104.5 522.47 55.44 522.47 34.51 395.4 87.85 395.4 89.1 395.34 89.1 395.34 108.24 395.34 127.38 395.4 127.38 395.4 128.64 522.47 181.97 522.47 161.05 407.69 111.98 407.69 108.24 407.69 104.5"
              />
              <polygon
                class="cls-2"
                points="524.72 58.25 524.72 37.33 397.65 90.66 397.65 91.92 397.59 91.92 397.59 131.52 397.65 131.52 397.65 131.66 524.72 184.78 524.72 163.86 409.94 115 409.94 107.32 524.72 58.25"
              />
              <polygon
                class="cls-1"
                points="659.66 104.5 544.88 55.44 544.88 34.51 671.95 87.85 671.95 89.1 672 89.1 672 108.24 672 127.38 671.95 127.38 671.95 128.64 544.88 181.97 544.88 161.05 659.66 111.98 659.66 108.24 659.66 104.5"
              />
              <polygon
                class="cls-2"
                points="547.14 58.25 547.14 37.33 674.21 90.66 674.21 91.92 674.26 91.92 674.26 131.52 674.21 131.52 674.21 131.66 547.14 184.78 547.14 163.86 661.91 115 661.91 107.32 547.14 58.25"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <nav class="navigation-position">
      <ul class="navigation-style">
        <a href="#home" v-smooth-scroll><li>HOME</li></a>
        <a href="#about" v-smooth-scroll><li>ABOUT</li></a>
        <a href="#projects" v-smooth-scroll><li>PROJECTS</li></a>
        <a href="#contact" v-smooth-scroll><li>CONTACT</li></a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cls-1 {
  fill: #e8e8e8;
}
.cls-2 {
  fill: #c30000;
}
.header {
  padding: 2.5rem 0;
  display: flex;
}

.logo {
  height: 2rem;
  svg {
    height: 100%;
  }
}

.navigation-style {
  display: flex;
  list-style: none;
  text-align: left;
  a {
    color: var(--secondary);

    &:hover {
      color: var(--elementBg);
      li {
        &::before {
          display: inline-block;
        }
      }
    }
    li {
      margin-left: 3rem;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        height: 2px;
        width: 100%;
        bottom: 0;
        background-color: var(--elementBg);
        display: none;
      }
    }
  }
}

@media screen and (max-width: 769px) {
  .header {
    justify-content: space-between;
  }
  .navigation-position {
    position: absolute;
    right: 2rem;
    top: 0;
    .navigation-style {
      flex-direction: column;
      li {
        text-align: right;
        margin-top: 2rem;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
