"use strict";

//define the DOM elements and store them in variables
const menuIconEL = document.querySelector(".menu-icon");
const sideBarEL = document.querySelector(".sidebar");
const sideBarCLoseEl = document.querySelector(".sidebar_close-icon");

const switchClassName = function (el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
};

menuIconEL.addEventListener("click", function () {
  switchClassName(sideBarEL, "sidebar-active");
});

sideBarCLoseEl.addEventListener("click", function () {
  switchClassName(sideBarEL, "sidebar-active");
});
