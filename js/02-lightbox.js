import { galleryItems } from "./gallery-items.js";
const galleryContainerRef = document.querySelector("ul.gallery");

const renderGallery = (gallery, container) => {
  const galleryMarkup = gallery
    .map(
      (image) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${image.original}" >
            <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
          </a>
        </li>`
    )
    .join("");
  container.insertAdjacentHTML("beforeend", galleryMarkup);
};

renderGallery(galleryItems, galleryContainerRef);

let gallery = new SimpleLightbox(".gallery a", {
  sourceAttr: "href",
  scrollZoom: false,
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
});
