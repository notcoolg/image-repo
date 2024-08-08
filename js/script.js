document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the list of images from the server
    const response = await fetch("images/image-list.json"); // Ensure this path is correct
    if (!response.ok) throw new Error("Network response was not ok");
    const images = await response.json();

    // Pick a random image from the list
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Create and set up the image element
    const imgElement = document.createElement("img");
    imgElement.src = randomImage.src;
    imgElement.alt = randomImage.alt || "Random Image"; // Optional: Alt text for accessibility

    // Create an anchor element if a link is provided
    if (randomImage.href) {
      const anchorElement = document.createElement("a");
      anchorElement.href = randomImage.href;
      anchorElement.target = "_blank";
      anchorElement.appendChild(imgElement);
      document.getElementById("image-container").appendChild(anchorElement);
    } else {
      document.getElementById("image-container").appendChild(imgElement);
    }
  } catch (error) {
    console.error("Error loading image:", error);
  }
});
