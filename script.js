// script.js
const content = document.querySelector('.content');

// Calculate animation duration based on the number of slides and desired speed
const slides = document.querySelectorAll('p');
const animationDuration = slides.length * 10 + 's'; // Adjust the time as needed

content.style.animationDuration = animationDuration;

// script.js
const card = document.querySelector('.menu-item-card');
const image = document.querySelector('#magnify-image');

card.addEventListener('mousemove', (e) => {
  const cardRect = card.getBoundingClientRect();
  const x = e.clientX - cardRect.left;
  const y = e.clientY - cardRect.top;

  const scaleX = card.clientWidth / image.width;
  const scaleY = card.clientHeight / image.height;

  image.style.transformOrigin = `${x}px ${y}px`;
  image.style.transform = `scale(${scaleX}, ${scaleY})`;
});

card.addEventListener('mouseleave', () => {
  image.style.transform = 'scale(1)';
});

