let clickToCopy = document.getElementById("emailToCopy");

const modal = document.getElementById("clipboardCopyMessage");

function removeClass() {
  modal.classList.remove("slide-in");
}

clickToCopy.addEventListener("click", () => {
  let text = clickToCopy.textContent;
  navigator.clipboard.writeText(text);
  modal.classList.add("slide-in");
  setTimeout(removeClass, 2000);
});

const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.getElementById("navList");

function toggleButton() {
  navList.classList.toggle("show");
}

hamburgerBtn.addEventListener("click", toggleButton);
