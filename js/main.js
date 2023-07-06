//open the sidebar menu
var openMenuBtn = document.getElementById("navToggler");
var sideBar = document.getElementById("navLinks");
var logo = document.getElementById("menorahLogo");
var bar2 = document.getElementById("barTwo");
/**
var websiteContainer = document.getElementById("contentWrapper");
 */

openMenuBtn.addEventListener("click", function () {
  sideBar.classList.toggle("sidebarWidth");
  openMenuBtn.classList.toggle("moveContentLeft");
  logo.classList.toggle("hideLogo");
  bar2.classList.toggle("changeX");
});

// Viewport is greater than 700 pixels wide
//OPEN AND CLOSE THE ACCORDION ON MOBILE MENU
var animatedDropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < animatedDropdown.length; i++) {
  animatedDropdown[i].addEventListener("click", function () {
//USE THIS CODE TO REMOVE ACTIVE CLASS AND TRANSFORMDROPDOWN FROM ALL DROPDOWN LIST WHEN ANOTHER ELEMENT IS CLICKED    
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      for (var x = 0; x < current.length; x++) {
        if (current[x].classList.contains("active")) {
          current[x].classList.remove("active");
        }
        var activeDropdown =
          document.getElementsByClassName("transformDropdown");
        if (activeDropdown.length > 0) {
          for (var w = 0; w < activeDropdown.length; w++) {
            if (activeDropdown[w].classList.contains("transformDropdown")) {
              activeDropdown[w].classList.remove("transformDropdown");
            }
          }
        }

      }
      current.classList.toggle("active");
    } 
/*
      var currentDropDown =
        document.getElementsByClassName("transformDropdown");
    if (currentDropDown.length > 0) {
       for (var p = 0; p < currentDropDown.length; p++) {
         if (currentDropDown[p].classList.contains("transformDropdown")) {
           currentDropDown[p].classList.remove("transformDropdown");
         }
       }  
      }
    */

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
   

//OPEN AND CLOSE THE ACCORDION ON EACH PAGE OTHER THAN THE MENU
var acc = document.getElementsByClassName("accordion-dropdown-btn"),
  m = 0;
for (m = 0; m < acc.length; m++) {
  acc[m].addEventListener("click", function () {
    this.classList.toggle("add-activated");
    var nextElement = this.nextElementSibling;
    if (nextElement.style.maxHeight) {
      nextElement.style.maxHeight = null;
    } else {
      nextElement.style.maxHeight = nextElement.scrollHeight + "px";
    }
  });
}

//OPEN AND CLOSE THE ACCORDION ON EACH TEAM MEMBER
var staffProfile = document.getElementsByClassName("img-wrapper"),
  k = 0;
for (k = 0; k < staffProfile.length; k++) {
  staffProfile[k].addEventListener("click", function () {
    this.classList.toggle("hi");
    var profile = this.nextElementSibling;
    if (profile.style.maxHeight) {
      profile.style.maxHeight = null;
    } else {
      profile.style.maxHeight = profile.scrollHeight + "px";
    }
  });
}

//BACK TO TOP BUTTON
window.onscroll = function () {
  scrollFunction();
};
var btnWrapper = document.getElementById("Back_Top_BTN");

function scrollFunction() {
  if (
    document.documentElement.scrollTop > 1000 ||
    document.body.scrollTop > 1000
  ) {
    btnWrapper.classList.add("translate-btn");
  } else {
    btnWrapper.classList.remove("translate-btn");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

