document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the list of images from the server
    const response = await fetch("images/image-list.json"); // Ensure this file lists your image URLs
    const images = await response.json();

    // Pick a random image from the list
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Set the image source to the selected random image
    const imgElement = document.getElementById("image");
    imgElement.src = `images/${randomImage}`;
  } catch (error) {
    console.error("Error loading image:", error);
  }
});
