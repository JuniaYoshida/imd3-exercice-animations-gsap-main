import animations from "./animations";
import scrollTriggerFunc from "./scroll-trigger";
import timelineExercices from "./timeline";

import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  animations();
  timelineExercices();
  scrollTriggerFunc();
});
