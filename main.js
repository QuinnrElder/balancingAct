// var's that creat hooks for welcome wrapper && close img
var welcomeUser = document.getElementById('welcome-header')
var closeIcon = document.getElementById("close-icon")
// creating an addEventListener for the click on close img
closeIcon.addEventListener("click", removeBanner)
// function to display no welcome banner on click of close img
function removeBanner(){
  welcomeUser.style.display = "none";
}

//  var's to create hooks on navigation icons "all three"
var clickClipboard = document.querySelector('.img-clipboard')
var clickWallet = document.querySelector(".wallet-img")
var clickWoman = document.querySelector(".img-woman")
// addEventListener's being applied to click of nav icons "all three"
clickClipboard.addEventListener("click", clipboardBorder)
clickWallet.addEventListener("click", walletBorder)
clickWoman.addEventListener("click", womanBorder)
// add blue border to clipboard
function clipboardBorder() {
  clickClipboard.classList.add("blue-border");
  clickWallet.classList.remove("blue-border");
  clickWoman.classList.remove("blue-border")
}
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

// var's to create hooks to both main's in index.html
var mainHtmlClipboard = document.querySelector(".clipboard-html")
var mainHtmlWallet = document.querySelector(".wallet-html")
// addEventListener to click of each main html
clickClipboard.addEventListener("click", mainHtml)
clickWallet.addEventListener("click", secondMainHtml)
// function showing main clipboard html
function mainHtml () {
  mainHtmlClipboard.hidden = false
  mainHtmlWallet.hidden = true
}
// function showing main wallets html
function secondMainHtml(){
  mainHtmlClipboard.hidden = true
  mainHtmlWallet.hidden = false
}

// var's create hooks to individual classes of butttons
var allButton = document.querySelector(".all-button-details")
var inflowButton = document.querySelector(".inflow-button-details")
var outflowButton = document.querySelector(".outflow-button-details")
// creating an addEventListener for the click on each button
allButton.addEventListener("click", runClickAll)
inflowButton.addEventListener("click", runClickInflow)
outflowButton.addEventListener("click", runClickOutflow )
// function for click of allButton
function runClickAll(){
  allButton.id = "solid-blue-button"
  inflowButton.id = ""
  outflowButton.id = ""
}
function runClickInflow() {
  allButton.id = ""
  inflowButton.id = "solid-blue-button"
  outflowButton.id = ""
}
function runClickOutflow(){
  allButton.id = ""
  inflowButton.id = ""
  outflowButton.id = "solid-blue-button"
}
