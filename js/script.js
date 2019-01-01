var link = document.querySelector(".open-form-popup");
var popup = document.querySelector(".modal.contact-us");
var close = document.querySelector(".close-modal");
var letterName = popup.querySelector("[name=letter-name]");
var form = popup.querySelector(".contact-us-form");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("one");
  popup.classList.add("show-popup");
  console.log("two");
  letterName.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("show-popup");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function(evt) {
  if (!letterName.value || !letterEmail.value || !letterContent.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("show-popup")) {
      popup.classList.remove("show-popup");
      popup.classList.remove("popup-error");
    }
  }
});
