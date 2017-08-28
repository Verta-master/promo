var link = document.querySelector(".send");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal__show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal__show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
    }
  }
});
