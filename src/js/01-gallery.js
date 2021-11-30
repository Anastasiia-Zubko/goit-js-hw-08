import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const container = document.querySelector('.gallery');
const gallery = createGallery(galleryItems);

container.insertAdjacentHTML('beforeend', gallery);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
    
     captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);