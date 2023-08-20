import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainerRef = document.querySelector("ul.gallery");

const renderGallery = (gallery, container) => {
  const galleryMarkup = gallery
    .map(
      (image) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
          </a>
        </li>`
    )
    .join("");
  container.insertAdjacentHTML("beforeend", galleryMarkup);
};

const onImageClick = (e) => {
  e.preventDefault();
  //check
  if (e.currentTarget === e.target) {
    return;
  }
  const imageRef = galleryItems.find((item) => item.preview === e.target.src);

  const instance = basicLightbox.create(
    `<img src="${imageRef.original}" alt="${imageRef.description}" />`
  );
  instance.show();

  document.addEventListener("keydown", onKeydownEscClick);
  function onKeydownEscClick(e) {
    if (e.code === "Escape") {
      instance.close();
    }
    document.removeEventListener("keydown", onKeydownEscClick);
  }
};
renderGallery(galleryItems, galleryContainerRef);
galleryContainerRef.addEventListener("click", onImageClick);
