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

let labels = document.querySelectorAll(".projects__label");
let numbers = document.querySelectorAll(".projects__number");
let texts = document.querySelectorAll(".projects__text");
let accordions = document.querySelectorAll(".projects__accordion");
labels.forEach((label, index) => {
  label.addEventListener("click", (e) => {
    accordions.forEach((accordion) =>
      accordion.classList.remove("projects__accordion--active")
    );
    accordions[index].classList.add("projects__accordion--active");

    texts.forEach((text) => text.classList.remove("projects__text--active"));
    texts[index].classList.add("projects__text--active");

    numbers.forEach((number) =>
      number.classList.remove("projects__number--active")
    );
    numbers[index].classList.add("projects__number--active");
  });
});

let items = document.querySelectorAll(".projects-desktop__items");
let projectNumbers = document.querySelectorAll(".projects-desktop__number");
let projectImgs = document.querySelectorAll(".projects-desktop__img");
let projectTexts = document.querySelectorAll(".projects-desktop__text");
let modal = document.querySelector(".modal");
let close = document.querySelector(".modal__img");
items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    modal.classList.add("modal--active");
    projectNumbers.forEach((number) =>
      number.classList.remove("projects-desktop__number--active")
    );
    projectNumbers[index].classList.add("projects-desktop__number--active");

    projectImgs.forEach((img) =>
      img.classList.remove("projects-desktop__img--active")
    );
    projectImgs[index].classList.add("projects-desktop__img--active");

    projectTexts.forEach((text) =>
      text.classList.remove("projects-desktop__text--active")
    );
    projectTexts[index].classList.add("projects-desktop__text--active");
  });
});
close.addEventListener("click", (e) => {
  modal.classList.remove("modal--active");
});

// projects-desktop__number--active
// projects-desktop__img--active
// projects-desktop__text--active
