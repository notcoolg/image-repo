<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic Image Gallery</title>
  <style>
    .image-container {
      display: flex;
      overflow-x: scroll;
      width: 1000px;
      height: 250px;
      white-space: nowrap;
    }
    .image-container img {
      height: 250px;
      margin-right: 10px;
    }
  </style>
</head>
<body>
  <div id="image-container" class="image-container"></div>

  <script>
    // Fetch JSON data and populate image container
    fetch('images.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('image-container');
        data.forEach(item => {
          const anchor = document.createElement('a');
          anchor.href = item.href;
          anchor.target = '_blank';

          const img = document.createElement('img');
          img.src = item.src;
          img.alt = 'Gallery Image';

          anchor.appendChild(img);
          container.appendChild(anchor);
        });
      })
      .catch(error => console.error('Error loading images:', error));
  </script>
</body>
</html>
