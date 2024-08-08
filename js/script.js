document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch the list of images from the server
    const response = await fetch("../image-list.json"); // Ensure this path is correct if images.json is in the root folder
    const images = await response.json();

    // Get the container for images
    const container = document.getElementById("image-container");

    // Populate the container with images
    images.forEach(item => {
      const anchor = document.createElement("a");
      anchor.href = item.href;
      anchor.target = "_blank";

      const img = document.createElement("img");
      img.src = `../images/${item.src}`; // Adjust path as needed
      img.alt = item.alt || "xxavvADS Showcase Ad";

      anchor.appendChild(img);
      container.appendChild(anchor);
    });
  } catch (error) {
    console.error("Error loading images:", error);
  }
});
