const slides = [
  `images/10.jpg`,
  'images/11.jpg',
  'images/12.jpg',
];

let currentSlideIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

function showSlide(index) {
  sliderImage.src = slides[index];
  currentSlideIndex = index;
  updateButtons();
  updateDots();
}

function updateButtons() {
  if (currentSlideIndex === 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }

  if (currentSlideIndex === slides.length - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}

function createDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.classList.remove('active');
    if (parseInt(dot.dataset.index) === currentSlideIndex) {
      dot.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    showSlide(currentSlideIndex - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    showSlide(currentSlideIndex + 1);
  }
});

dotsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    const index = parseInt(e.target.dataset.index);
    showSlide(index);
  }
});

createDots();
showSlide(currentSlideIndex);