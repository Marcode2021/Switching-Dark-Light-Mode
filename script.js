const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector(".text-box");
// Dark mode Styles
const imageMode = function (color) {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
};
const darkMode = function () {
  nav.style.background = "rgb(0 0 0 / 50%)";
  textBox.style.background = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
  imageMode("dark");
};
const lightMode = function () {
  nav.style.background = "rgb(255 255 255 / 50%)";
  textBox.style.background = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
  imageMode("light");
};
//Switch Theme Dynamically
const switchTheme = function (event) {
  document.documentElement.setAttribute(
    "data-theme",
    `${event.target.checked ? "dark" : "light"}`
  );
  if (event.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
};
// Event listener
toggleSwitch.addEventListener("change", switchTheme);
