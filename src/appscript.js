const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.getElementById("navList");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", toggleButton);
