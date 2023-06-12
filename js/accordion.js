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
