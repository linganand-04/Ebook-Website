// Add custom JavaScript here
function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("navbar-sticky");
    }
  });
}

function navClick() {
  const menu = document.querySelector(".navbar-toggler-icon");
  const navbar = document.querySelector(".navbar");

  menu.addEventListener("click", () => {
    navbar.classList.add("navbar-sticky");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  userScroll();
  navClick();
});

// Year Dynamically

const year = document.querySelector(".year");
const curryear = new Date().getFullYear();

year.textContent = curryear;
