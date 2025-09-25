const viewer = document.querySelector('.viewer');
const viewerImage = viewer.querySelector('img');
const closeButton = document.querySelector('.close-viewer');
const thumbnails = document.querySelectorAll('.gallery img');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    const fullSize = img.getAttribute('data-full');
    viewerImage.src = fullSize;
    viewer.classList.remove('hidden');
  });
});

closeButton.addEventListener('click', () => {
  viewer.classList.add('hidden');
  viewerImage.src = '';
});

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('nav-open');
});
