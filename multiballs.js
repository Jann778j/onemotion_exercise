"use strict";
import { animate, stagger } from "https://cdn.skypack.dev/motion";

animate(
  ".ball",
  { y: ["0px", "-400px", "0px"] },
  {
    duration: 2,
    delay: stagger(0.2),
    easing: [0.3, 1, 0.7, 0],
    repeat: "infinite",
  }
);
