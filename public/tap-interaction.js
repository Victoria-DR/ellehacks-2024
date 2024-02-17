AFRAME.registerComponent("tap-interaction", {
  init: function () {
    const entity = this.el;

    // Listen for the tap event on the entity
    entity.addEventListener("click", function (event) {
      console.log("Click event received!");

      // Check if event.alpha is available
      if (event.alpha !== null) {
        // Get the tapped position in world coordinates
        const tapPosition = event.detail.intersection.point;

        console.log("Tapped position:", tapPosition);

        // Create a new box entity at the tapped position
        const newBox = document.createElement("a-box");
        newBox.setAttribute("color", "blue");
        newBox.setAttribute("position", tapPosition);
        newBox.setAttribute("scale", "0 0 0"); // Initial scale set to 0

        // Append the new box entity to the scene
        entity.scene.appendChild(newBox);

        // Use A-Frame animation to gradually fade in the new box
        newBox.setAttribute(
          "animation__scale",
          "property: scale; to: 1 1 1; dur: 1000"
        ); // Adjust duration as needed
      } else {
        console.warn("Device orientation data not available.");
        // Handle the case where device orientation data is not available
      }
    });
  },
});
