AFRAME.registerComponent("tap-interaction", {
  init: function () {
    const entity = this.el;

    // Listen for the tap event on the entity
    entity.addEventListener("click", function (event) {
      // Get the tapped position in world coordinates
      const tapPosition = event.detail.intersection.point;

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
    });
  },
});
