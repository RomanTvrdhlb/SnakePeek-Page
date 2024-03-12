export default {
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  accParrent: [...document.querySelectorAll('[data-accordion-init]')],
  header: document.querySelector('header'),
  footer: document.querySelector('footer'),
  overlay: document.querySelector('[data-overlay]'),
  mobileMenu: document.querySelector('.header-menu'),
  burger: document.querySelector('.burger'),



  mainSlider: document.querySelector('.info-slider'),
}





