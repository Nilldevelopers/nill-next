var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-id").style.top = "0px";
  } else {
    document.getElementById("navbar-id").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};
