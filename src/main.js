import Vue from 'vue';

import VueScrollTo from 'vue-scrollto';

import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}
//import "./scripts/scroll-to";
import "./scripts/parallax";
import "./scripts/burger";
import "./scripts/skills";
import "./scripts/reviews";
import "./scripts/works";
