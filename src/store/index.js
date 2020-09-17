import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        name: ["EASV", "Canteen", "Project"],
        description: [
          "This school project had as a subject the school canteen. Our job was to evaluate its services and the UX of its customers and try to improve it in the digital environment.",
          "After doing our research: interviews and observations, our findings showed that the biggest problem was the narrow communication channel that the canteen was using(printed paper). This was limiting their reach.",
          "As a result, we decided to create a website for the organization that would exponentially improve their communication capabilities and its reach in the student community.",
          "The goal of the project was to create a wireframe for our solution. I went a bit further and made a prototype webpage."
        ],
        imageURL: require("../../public/easv-canteen.png"),
        websiteLink: "https://easvcanteen.netlify.app/",
        codeLink: "https://github.com/raul-octavian/canteen-project"
      },
      {
        name: ["Rhei", "mindfulness", "app"],
        description: [
          "A great and challenging subject was brought forward by Vala health and our second-semester project.",
          "A challenge that I tackled together with my team, and we created this amazing app.",
          "The challenge was to communicate with persons that suffer from depression and anxiety, and to help them communicate with each other.",
          "The following website is the result of the first iteration and comes after three weeks of research, wireframe, and coding.",
          "For the best experience, please open the link on your phone or Right-click - inspect - Toggle device toolbar - from the device dropdown menu chose one of the phone sizes you prefer."
        ],
        imageURL: require("../../public/Rhei.png"),
        websiteLink: "https://rhei-prototype.netlify.app/",
        codeLink: "https://github.com/team-awesome-EASV/rhei"
      },
      {
        name: ["Water", "Commercial"],
        description: [
          "One of those fun school projects was the commercial project.",
          "We had the task whit creating a 20sec commercial about a subject of our choosing.We chose to advertise water. ",
          "The 20sec commercial took around 12 hours of preparation and filming.",
          "In the team, I assumed the roles of actor and director."
        ],
        imageURL: require("../../public/water.png"),
        websiteLink: "",
        codeLink: "https://www.youtube.com/watch?v=5NYV_mr4IfM"
      }
    ]
  },
  getters: {
    getProjectContent: state => state.projects
  },
  mutations: {},
  actions: {},
  modules: {}
});
