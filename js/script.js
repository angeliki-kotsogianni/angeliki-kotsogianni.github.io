const body = document.body;
const button = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  button.textContent = "☀️";
}

// Toggle theme
button.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    button.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    button.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
