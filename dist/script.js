const button = document.querySelector('[data-target="navbar-solid-bg"]');
const menu = document.querySelector("#navbar-solid-bg");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
