import "./styles.css";

const rive = require("@rive-app/canvas");

// ----
// LOCAL RIVE EXAMPLE
// ----

const layout = new rive.Layout({
  fit: rive.Fit.Contain, // Change to: rive.Fit.Contain, or Cover
  alignment: rive.Alignment.Center,
});

const riveCanvas = document.getElementById("rive-canvas");
const riveButton = document.getElementById("rive-button");
const riveStart = document.getElementById("start-button");

// const riveInstance = new rive.Rive({
//   // Load a local riv `clean_the_car.riv` or upload your own!
//   src: "complete.riv",
//   // Be sure to specify the correct state machine (or animation) name
//   stateMachines: "State Machine 1", // Name of the State Machine to play
//   canvas: riveCanvas,
//   layout: layout, // This is optional. Provides additional layout control.
// });

// Resize the drawing surface if the window resizes
window.addEventListener(
  "resize",
  () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  },
  false
);
let oldInstance = null;

riveStart.addEventListener(
  "click",
  () => {
    if (oldInstance) {
      oldInstance.cleanup();
    }
    const riveInstance = new rive.Rive({
      // Load a local riv `clean_the_car.riv` or upload your own!
      src: "complete.riv",
      // Be sure to specify the correct state machine (or animation) name
      stateMachines: "State Machine 1", // Name of the State Machine to play
      canvas: riveCanvas,
      layout: layout, // This is optional. Provides additional layout control.
    });
    oldInstance = riveInstance;
    riveInstance.resizeDrawingSurfaceToCanvas();

    riveInstance.play();
  },
  false
);
riveButton.addEventListener(
  "click",
  () => {

    if (oldInstance) {
      riveInstance.stop();

      riveInstance.cleanup();
    }
  },
  false
);

// ---------------------------------

// ----
// HOSTED RIVE EXAMPLE
// Comment out the code above and uncomment the code below.
// ----

// const riveHostedInstance = new rive.Rive({
//   // Hosted .riv asset.
//   src: "https://cdn.rive.app/animations/vehicles.riv",
//   stateMachines: "bumpy",
//   canvas: riveCanvas,
//   autoplay: true,
//   onLoad: () => {
//     riveHostedInstance.resizeDrawingSurfaceToCanvas();
//   }
// });
