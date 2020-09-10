import fileImage from './image.png';

function component() {
  const img = new Image(500);
  img.src = fileImage;

  return img;
}

document.body.appendChild(component());