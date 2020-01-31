// var closeIcon = document.getElementById("close-icon");
// var welcomeUser = document.getElementById('welcome-header')

//find the close-icon
//click the close-icon
//make removeBanner disapear
var welcomeUser = document.getElementById('welcome-header')
var closeIcon = document.getElementById("close-icon")
console.log(closeIcon)
closeIcon.addEventListener("click", removeBanner)
function removeBanner(){
  console.log("im in");
  welcomeUser.style.display = "none";
}
