document.getElementById("btn").addEventListener("click", () => {
  // Get the container where new boxes will be added
  let boxContainer = document.getElementById("box-container");

  // Create a new div element
  let newBox = document.createElement("div");
  newBox.className = "box"; // Use 'box' class for consistent styling

  // Assign content to the new box (e.g., the next number in sequence)
  let boxCount = boxContainer.getElementsByClassName("box").length;
  newBox.textContent = boxCount + 1;

  // Insert the new box before the button
  boxContainer.insertBefore(newBox, document.getElementById("btn"));
});
