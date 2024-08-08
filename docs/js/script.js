document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the list of images from the server
    const response = await fetch("images/image-list.json"); // Ensure this file lists your image URLs
    const images = await response.json();

    // Pick a random image from the list
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Set the image source to the selected random image
    const imgElement = document.getElementById("image");
    imgElement.src = randomImage.src;
    imgElement.alt = randomImage.alt || "Random Image"; // Optional: Alt text for accessibility

    // Set the link for the image if available
    if (randomImage.href) {
      const anchorElement = document.createElement("a");
      anchorElement.href = randomImage.href;
      anchorElement.target = "_blank";
      anchorElement.appendChild(imgElement.cloneNode(true));
      
      // Replace the original image element with the linked one
      imgElement.replaceWith(anchorElement);
    }
  } catch (error) {
    console.error("Error loading image:", error);
  }
});
