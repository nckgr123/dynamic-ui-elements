class Slider {
  constructor(sliderNode) {
    this._showSlideForMS = 5000;
    this._container = sliderNode;
    this._container.classList.add("slider-initialized");
    this._slides = this._container.querySelectorAll(".slide");

    this._pagination = this._container.querySelector(".slider-pagination");
    this._paginationDots = [];
    this._slides.forEach((slide) => {
      let paginationDot = document.createElement("span");
      paginationDot.classList.add("pag-dot");
      this._pagination.appendChild(paginationDot);
      this._paginationDots.push(paginationDot);
    });

    this._prev = this._container.querySelector(".slider-nav .prev");
    this._next = this._container.querySelector(".slider-nav .next");
    this._prev.addEventListener("click", () => {
      this.prevSlide();
      this.resetNextTimer();
    });
    this._next.addEventListener("click", () => {
      this.nextSlide();
      this.resetNextTimer();
    });

    this._activeSlideIndex = 0;
    this.activateSlide(this._activeSlideIndex);
    this.resetNextTimer();
  }
  resetNextTimer() {
    clearInterval(this._nextTimer);
    this._nextTimer = setInterval(
      this.nextSlide.bind(this),
      this._showSlideForMS
    );
  }
  nextSlide() {
    this.deactivateSlide(this._activeSlideIndex);
    this._activeSlideIndex = (this._activeSlideIndex + 1) % this._slides.length;
    this.activateSlide(this._activeSlideIndex);
  }
  prevSlide() {
    this.deactivateSlide(this._activeSlideIndex);
    this._activeSlideIndex =
      (this._activeSlideIndex - 1 + this._slides.length) % this._slides.length;
    this.activateSlide(this._activeSlideIndex);
  }
  activateSlide(slideIndex) {
    let slideToActivate = this._slides[slideIndex];
    this._paginationDots[slideIndex].classList.add("active");
    slideToActivate.classList.add("active");
  }
  deactivateSlide(slideIndex) {
    let slideToDeactivate = this._slides[slideIndex];
    this._paginationDots[slideIndex].classList.remove("active");
    slideToDeactivate.classList.remove("active");
  }
}

const initSliders = () => {
  let allSliders = document.querySelectorAll(".slider-container");
  allSliders.forEach((sliderNode) => new Slider(sliderNode));
};

export default initSliders;
