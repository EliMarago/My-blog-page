/* Navigation bar */
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", function () {
  console.log("Open clicked");

  container.classList.add("show-nav");
});

close.addEventListener("click", function () {
  container.classList.remove("show-nav");
});

/* Search Button */
const search = document.querySelector(".box-search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  input.focus();
});
