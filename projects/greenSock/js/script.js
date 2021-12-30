var tlHero = gsap.timeline();

tlHero.from('.site', { opacity: 0, duration: 0.5 })
    .from('.hero__title', { opacity: 0, y: 100, duration: 0.5 })
    .from('.hero__btn', { opacity: 0, y: 100, duration: 0.5 }, "-=0.5")
    .from('.hero__descr', { opacity: 0, duration: 1 })
    .from('.photos-wrap__img-1', { opacity: 0, duration: 0.7, ease: "power2.out", }, "-=0.9")
    .from('.photos-wrap__img-2', { opacity: 0, duration: 0.7 }, "-=0.7")
    .from('.photos-wrap__img-3', { opacity: 0, duration: 0.7 }, "-=0.3")
    .from('.photos__author', { opacity: 0, duration: 1 }, "-=0.5");

var tlBurger = gsap.timeline({ paused: true, reversed: true });

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu').offsetHeight;
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
    tlBurger.play();

});

tlBurger
    .fromTo('.menu__top', { opacity: 0, y: -50 }, { opacity: 1, y: 0, zIndex: 16, duration: 0.3 })
    .fromTo('.close', { opacity: 0, }, { opacity: 1, duration: 0.3 }, "-=0.4")
    .fromTo('.menu', { opacity: 0 }, { opacity: 1, zIndex: 16, duration: 0.7 }, "-=0.5")
    .from('.menu__nav', { opacity: 0, y: 50, duration: 0.7 })
    .from('.social', { opacity: 0, y: 50, duration: 1 }, "-=0.5")
    .from('.menu__right', { opacity: 0, y: 50, duration: 1 }, "-=1");

close.addEventListener('click', () => {
    tlBurger.reverse();

});