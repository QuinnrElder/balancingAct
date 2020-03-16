var welcomeBanner = document.querySelector('#welcome-header');
var closeBannerIcon = document.querySelector('#close-icon');
var navBar = document.querySelector('.nav-link-imgs');
var clipboard = document.querySelector('.img-clipboard');
var wallet = document.querySelector('.wallet-img');
var profile = document.querySelector('.img-woman');

closeBannerIcon.addEventListener('click', closeBanner );
navBar.addEventListener('click', navHandler);

function navHandler(event) {
  debugger
  if (event.target === clipboard) {
    clipboard.classList.add('blue-border');
    wallet.classList.remove('blue-border');
    return
  }
  if (event.target === wallet) {
    wallet.classList.add('blue-border');
    clipboard.classList.remove('blue-border');
    return
  }
}

function closeBanner() {
  welcomeBanner.classList.add('hidden');
}