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
const toggleDarkLightMode = function (isLight) {
  nav.style.background = isLight
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  textBox.style.background = isLight
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = isLight ? "Light Mode" : "Dark Mode";
  isLight
    ? toggleIcon.children[1].classList.replace("fa-moon", "fa-sun")
    : toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  isLight ? imageMode("light") : imageMode("dark");
};
//Switch Theme Dynamically
const switchTheme = function (event) {
  document.documentElement.setAttribute(
    "data-theme",
    `${event.target.checked ? "dark" : "light"}`
  );
  if (event.target.checked) {
    toggleDarkLightMode(false);
    localStorage.setItem("theme", "dark");
  } else {
    toggleDarkLightMode(true);
    localStorage.setItem("theme", "light");
  }
  //   console.log(event.target.checked);
};
// Event listener
toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  toggleSwitch.checked = true;
  toggleDarkLightMode(false);
  document.documentElement.setAttribute("data-theme", `dark`);
}
