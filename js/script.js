let btns = document.querySelectorAll(".paying-desktop__btn");
let images = document.querySelectorAll(".paying-desktop__img");
btns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    images.forEach((img) =>
      img.classList.remove("paying-desktop__img--active")
    );
    images[index].classList.add("paying-desktop__img--active");
    btns.forEach((btn) => btn.classList.remove("paying-desktop__btn--active"));
    btns[index].classList.add("paying-desktop__btn--active");
  });
});
