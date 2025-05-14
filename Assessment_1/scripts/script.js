"use strict";

const btn = document.querySelector("#button");
console.log("Page was loaded");
btn.addEventListener("click", () => {
  alert("Button was clicked");
  console.log("Button was clicked!");
});
