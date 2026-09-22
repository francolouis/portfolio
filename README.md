const portfolioItems = [
  {
    title: 'Studio North Launch Kit',
    category: 'branding',
    type: 'Brand Identity',
    description: 'A premium launch pack for a creative studio entering a new market.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Summer Product Reel',
    category: 'video',
    type: 'Social Video',
    description: 'Fast-paced social campaign built to drive attention and conversion.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Editorial Ad Series',
    category: 'campaign',
    type: 'Marketing Design',
    description: 'Visual campaign story for an editorial product drop and seasonal push.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Luma Brand System',
    category: 'branding',
    type: 'Identity Design',
    description: 'Brand direction built around a modern, elevated visual rhythm.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Creator Reel Edit',
    category: 'video',
    type: 'Short-form Editing',
    description: 'A polished cut for a creator looking to turn engagement into followers.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Launch Campaign Assets',
    category: 'campaign',
    type: 'Campaign Creative',
    description: 'A mix of promotional graphics and motion-led assets for launch week.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80'
  }
];

const portfolioGrid = document.getElementById('portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-button');
const yearTarget = document.getElementById('year');
const themeToggle = document.querySelector('.theme-toggle');

function renderPortfolio(filter = 'all') {
  if (!portfolioGrid) return;

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  portfolioGrid.innerHTML = filteredItems
    .map(
      (item) => `
        <article class="portfolio-card">
          <img src="${item.image}" alt="${item.title}" />
          <div class="portfolio-info">
            <span>${item.type}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </article>
      `
    )
    .join('');
}

if (filterButtons.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderPortfolio(button.dataset.filter);
    });
  });
}

if (portfolioGrid) {
  renderPortfolio();
}

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.textContent = 'Inquiry sent';
      submitButton.disabled = true;
      submitButton.style.opacity = '0.75';
    }
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































n











n
































n




n




n


n

n

n

n

n

n

n
n

n
n

n
n
n

n
n

n
n
n
n
n

n







n

n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n

n
n
n
n

n
n
n
n
n

n

n
n
n
n
n

n
n
n
n
n
n
n
n

n
n

n

n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n

n
n
n





n

n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n

n

n
n
n
n
n
n
n
n
n
n
n



n

n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
n
