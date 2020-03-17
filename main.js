var welcomeBanner = document.querySelector('#welcome-header');
var closeBannerIcon = document.querySelector('#close-icon');
var navBar = document.querySelector('.nav-link-imgs');
var clipboard = document.querySelector('.img-clipboard');
var wallet = document.querySelector('.wallet-img');
var profile = document.querySelector('.img-woman');
var mainPage1 = document.querySelector('.clipboard-main-pages');
var mainPage2 = document.querySelector('.wallet-main-pages')

closeBannerIcon.addEventListener('click', closeBanner );
navBar.addEventListener('click', navHandler);

function navHandler(event) {
  debugger
  if (event.target === clipboard) {
    addClipboardBoarder();
    displayMainPage();
    return
  }
  if (event.target === wallet) {
    addWalletBoarder();
    displayTransactionsPage()
    return
  }
  if (event.target === profile) {
    addProfileBoarder();
    displayProfilePage();
    return
  }
}

function closeBanner() {
  welcomeBanner.classList.add('hidden');
}

function addClipboardBoarder() {
  clipboard.classList.add('blue-border');
  wallet.classList.remove('blue-border');
  profile.classList.remove('blue-border');
}

function addWalletBoarder() {
  wallet.classList.add('blue-border');
  clipboard.classList.remove('blue-border');
  profile.classList.remove('blue-border');
}

function addProfileBoarder() {
  profile.classList.add('blue-border');
  clipboard.classList.remove('blue-border');
  wallet.classList.remove('blue-border');
}

// create function to remove hidden attribute from "clipboard-main-pages wallet-html on click of the wallet icon.
// add a hidden attribute to wallet-main-pages clipboard-html
function displayTransactionsPage() {
  mainPage1.hidden = true;
  mainPage2.hidden = false;
  profile.hidden = true;
}

function displayMainPage() {
  mainPage1.hidden = false;
  mainPage2.hidden = true;
  profile.hidden = true;
}

function displayProfilePage() {
  mainPage1.hidden = true;
  mainPage2.hidden = true;
  profile.hidden = false;
}