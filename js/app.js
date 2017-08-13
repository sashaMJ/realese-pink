var menuSwitch = document.querySelector(".page-header__switch");
var bgHeader = document.querySelector(".bg-header-wrap");

if (window.innerWidth < 960) bgHeader.classList.add("menu-hide");

menuSwitch.addEventListener("click", function () {
  bgHeader.classList.toggle("menu-hide");
});
