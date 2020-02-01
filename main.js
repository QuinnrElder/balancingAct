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




var clipboard = document.querySelector('.img-clipboard')
var clickWallet = document.querySelector(".wallet-img")
clickWallet.addEventListener("click", moveBlueBorder)
function moveBlueBorder() {
  clipboard.classList.remove("blue-border");
  clickWallet.classList.add("blue-border");
}
// Creating an addEventListener for click on wallet to add border
// on click run function to add border to Wallet
// once wallet clicked inner.html runs
