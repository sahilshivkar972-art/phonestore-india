const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const cartCount = document.querySelector('.cart-count');
const modal = document.getElementById('offerModal');
const closeModal = document.querySelector('.close-modal');
const modalButton = document.querySelector('.modal-btn');
const addToCartButtons = document.querySelectorAll('.product-body button');
const newsletterForm = document.querySelector('.newsletter-form');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedFilter = button.dataset.filter;

    productCards.forEach((card) => {
      const category = card.dataset.category || '';
      const shouldShow =
        selectedFilter === 'all' || category.toLowerCase().includes(selectedFilter.toLowerCase());
      card.style.display = shouldShow ? 'block' : 'none';
    });
  });
});

let cartValue = Number(cartCount.textContent.trim());

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartValue += 1;
    cartCount.textContent = cartValue;
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.8';
  });
});

setTimeout(() => {
  modal.classList.add('show');
}, 900);

const hideModal = () => modal.classList.remove('show');
closeModal.addEventListener('click', hideModal);
modalButton.addEventListener('click', hideModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector('button');
  button.textContent = 'Subscribed';
  button.disabled = true;
});
