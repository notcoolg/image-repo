async function fetchImages() {
  try {
    const response = await fetch('https://api.github.com/repos/notcoolg/image-repo/contents/images');
    const files = await response.json();
    const imageFiles = files.filter(file => file.type === 'file');
    const randomFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];
    const imageUrl = randomFile.download_url;

    document.getElementById('image').src = imageUrl;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

window.onload = fetchImages;
