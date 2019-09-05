const images = ["cake", "house", "vase", "woman"];
let index = 0;
setInterval(() => {
  const imageEls = document.querySelectorAll(".image");

  imageEls.forEach(imageEl => {
    imageEl.style.display = `none`;
  });

  index = (index + 1) % 4;
  const imageEl = document.querySelector("." + images[index]);
  imageEl.style.display = `block`;
}, 5000);
