//open the sidebar menu
var openMenuBtn = document.getElementById("navToggler");
var sideBar = document.getElementById("navLinks");
var logo = document.getElementById("menorahLogo");
var bar2 = document.getElementById("barTwo");
/**
var websiteContainer = document.getElementById("contentWrapper");
 */
var bgColor = document.getElementById("websiteBody");

openMenuBtn.addEventListener("click", function () {
  sideBar.classList.toggle("sidebarWidth");
  openMenuBtn.classList.toggle("moveContentLeft");
  logo.classList.toggle("hideLogo");
  bar2.classList.toggle("changeX");
  bgColor.classList.toggle("backgroundcolor");
});

// Viewport is greater than 700 pixels wide
//OPEN AND CLOSE THE ACCORDION ON MOBILE MENU
var animatedDropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < animatedDropdown.length; i++) {
  animatedDropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropDown = this.nextElementSibling;

    if (window.matchMedia("(max-width: 600px)").matches) {
      if (dropDown.style.maxHeight) {
        dropDown.style.maxHeight = null;
      } else {
        dropDown.style.maxHeight = dropDown.scrollHeight + "px";
      }
    } else {
      dropDown.classList.toggle("transformDropdown");
    }
  });
}

//OPEN AND CLOSE THE ACCORDION ON MOBILE MENU
/*
  var topnavBarDropdown = document.getElementsByClassName("dropdown-btn");
  var m;

  for (m = 0; m < topnavBarDropdown.length; i++) {
    topnavBarDropdown[m].addEventListener("click", function () {
      this.classList.toggle("active");
      var drpdown = this.nextElementSibling;
    });
  }
  */
