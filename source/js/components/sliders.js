import Swiper from 'swiper';
import vars from "../_vars";
import {Autoplay} from 'swiper/modules';

const {mainSlider} = vars;

if (mainSlider) {
  const swiper = new Swiper(mainSlider.querySelector('.info-slider__container'), {
    modules: [Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 40,
    observer: true,
    observeParents: true,
    loop: true,
    speed: 5000,
  
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
      },
      1024: {
        spaceBetween: 40,
      },
    },
  });
}
