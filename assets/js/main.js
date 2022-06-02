let interval = 0;

const slides = document.querySelectorAll("[data-slider-item]");
const sliderLength = document.querySelectorAll("[data-slider-item]").length;
const control = document.querySelector("[data-control]");

const initialState = () => {
  slides.forEach((item, index) => {
    if (index !== 0) {
      item.style.display = "none";
    }
  });

  slides.forEach((item, i) => {
    const icon = document.createElement("span");
    control.appendChild(icon);
    if (i === 0) {
      icon.classList.add("active");
    }
  });
};

const sliderNavigation = () => {
  const icons = document.querySelectorAll(".slider__controls span");

  const automaticSlider = setInterval(() => {
    slides[interval].style.display = "none";
    icons[interval].classList.remove("active");
    interval++;
    if (interval === sliderLength) {
      interval = 0;
    }
    slides[interval].style.display = "block";
    icons[interval].classList.add("active");
  }, 3000);

  icons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      clearInterval(automaticSlider);

      slides[interval].style.display = "none";
      interval = index;
      slides[interval].style.display = "block";

      icons.forEach((icon) => {
        icon.classList.remove("active");
      });
      icon.classList.add("active");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initialState();
  sliderNavigation();
});
