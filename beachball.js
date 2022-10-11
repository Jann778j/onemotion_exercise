// "use strict";
// import { animate } from "https://cdn.skypack.dev/motion";

// animate(
//   ".ball",
//   { translateX: 400, rotate: 200 },
//   { duration: 2, delay: 1.0 }
// ).finished.then(() => {
//   animate(".ball", { scale: 0 });
// });

"use strict";

import { animate, stagger, timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  [".ball", { x: 400, rotate: 200 }, { duration: 2 }],
  [".ball", { scale: 0.3 }],
  [".ball", { scale: 0.3, x: 1370, y: -730 }],
];

timeline(sequence);
