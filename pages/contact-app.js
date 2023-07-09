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
