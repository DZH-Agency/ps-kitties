import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({ offset: 100, }); // eslint-disable-line new-cap
};
