//find the close-icon
//click the close-icon
//make removeBanner disapear
var welcomeUser = document.getElementById('welcome-header')
var closeIcon = document.getElementById("close-icon")

closeIcon.addEventListener("click", removeBanner)
function removeBanner(){
  console.log("im in");
  welcomeUser.style.display = "none";
}




var clickClipboard = document.querySelector('.img-clipboard')
var clickWallet = document.querySelector(".wallet-img")
var clickWoman = document.querySelector(".img-woman")

clickClipboard.addEventListener("click", clipboardBorder)
clickWallet.addEventListener("click", walletBorder)
clickWoman.addEventListener("click", womanBorder)
// add blue-border to wallet
function walletBorder() {
  clickClipboard.classList.remove("blue-border");
  clickWallet.classList.add("blue-border");
  clickWoman.classList.remove("blue-border")
}
// add blue border to woman-img
function womanBorder() {
  clickClipboard.classList.remove("blue-border");
  clickWallet.classList.remove("blue-border");
  clickWoman.classList.add("blue-border")
}
// add blue border to clipboard
function clipboardBorder() {
  clickClipboard.classList.add("blue-border");
  clickWallet.classList.remove("blue-border");
  clickWoman.classList.remove("blue-border")
}
// Creating an addEventListener for click on wallet to add border
// on click run function to add border to Wallet
// once wallet clicked inner.html runs
