let themeButton = document.querySelector("#theme-toggle");
let hero = document.querySelector("#hero");

function handleClick() {
  if (document.body.classList.contains("light")) {
    themeButton.textContent = "🌙 Switch to Light Mode";
  } else {
    themeButton.textContent = "☀️ Switch to Dark Mode";
  }
  document.body.classList.toggle("light");
}

themeButton.addEventListener("click", handleClick);
