const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.cart');
const shoppingCartContainer = document.querySelector('#shoppingCart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);
cardsContainer.addEventListener("click", toggleproductDetailContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isShoppingCartClosed = desktopMenu.classList.contains('inactive');

  if (!isShoppingCartClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isShoppingCartClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
  closeProductDetailAside();
}

function toggleShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
  }
  shoppingCartContainer.classList.toggle('inactive');
}

function toggleproductDetailContainer() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.toggle('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}