import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainerRef = document.querySelector("ul.gallery");

const renderGallery = (gallery, container) => {
  const galleryMarkup = gallery
    .map(
      (image) =>
        `<li class="gallery__item">
          <a class="gallery__link">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
          </a>
        </li>`
    )
    .join("");
  container.insertAdjacentHTML("beforeend", galleryMarkup);
};

const onImageClick = (e) => {
  //check
  if (e.currentTarget === e.target) {
    return;
  }
  const imageRef = galleryItems.find((item) => item.preview === e.target.src);

  const instance = basicLightbox.create(
    `<img src="${imageRef.original}" alt="${imageRef.description}" />`
  );
  instance.show();
};

renderGallery(galleryItems, galleryContainerRef);
galleryContainerRef.addEventListener("click", onImageClick);
