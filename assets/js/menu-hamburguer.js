const buttonMobile = document.getElementById("mobile-menu-button");
const menuMobile = document.getElementById("menu-mobile");
const body = document.body;

const closeMobileMenu = () => {
  menuMobile.classList.remove("menu-open");
  body.classList.remove("body-menu-open");
  buttonMobile.classList.remove("button-x");
};

buttonMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-open");
  body.classList.toggle("body-menu-open");
  buttonMobile.classList.toggle("button-x");
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  if (windowWidth > 992 && menuMobile.classList.contains("menu-open")) {
    closeMobileMenu();
  }
});
