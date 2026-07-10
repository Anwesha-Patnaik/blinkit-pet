import './style.css'

document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("splash-screen");
  const homepage = document.getElementById("homepage");

  // Show splash for 2 seconds (2000 ms), then fade out and show homepage
  setTimeout(() => {
    splashScreen.classList.add("hidden");
    homepage.classList.remove("hidden");
  }, 2000);
});
