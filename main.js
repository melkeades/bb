import './style.styl'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

const select = (element) => document.querySelector(element)
gsap.registerPlugin(ScrollTrigger)

const wrapperContainer = document.createElement('div')
const parrentContainer = select('.section2__screen1')
wrapperContainer.setAttribute('class', 'section2__screen2-wrapper')
// const wrapperContainer = select('.section2__screen1')
const wrappingElement = select('.section2__screen2')
// wrappingElement.replaceWith(wrapperContainer)
// wrapperContainer.appendChild(wrappingElement)
parrentContainer.appendChild(wrapperContainer)
wrapperContainer.appendChild(wrappingElement)
const phoneMoveX = '16vw'
const sec1 = gsap
  .timeline({ paused: true, defaults: { duration: 1, ease: 'linear' } })
  .to(['.section2__title', '.section2__subtitle'], { opacity: 0, stagger: 0.5, duration: 0.5 })
  .to('.section2__screen1', { y: -350 }, '<')
  .from('.screen1__phone', { y: 100, duration: 2 }, '<')
  .from('.screen1__list__li', { y: 200, stagger: 0.3, opacity: 0 }, '<+=0.5')
  .from('.screen1__screen2', { opacity: 0 }, '>-=-0.3')
  // .to('.screen1__phone-warpper', { overflow: 'hidden' }, '>')
  .to('.screen1__list__li', { y: -100, stagger: 0.1, opacity: 0 }, '>-=0.1')
  .to('.screen1__phone', { x: '-' + phoneMoveX, opacity: 0, duration: 1 }, '>-=0.4')
  // .set('.section2__screen1', { display: 'none' })
  .set('.section2__screen2-wrapper', { opacity: 1 })
  // .to('.screen2__phone-warpper', { overflow: 'hidden' }, '>')
  .from('.screen2__phone', { x: phoneMoveX, opacity: 0, duration: 1 })
  .from('.screen2__list__li', { y: 200, stagger: 0.3, opacity: 0 }, '>')
  .from('.screen2__screen2', { opacity: 0 }, '>-=-0.3')

  .to('.screen2__list__li', { y: -100, stagger: 0.1, opacity: 0 }, '>-=0.1')

  .add('', {})

// // .set('.screen2__phone-warpper', { overflow: 'visible' }, '<')
// .from('.screen2__phone', { y: 100, duration: 2 }, '<')
// // .to('.screen2__phone', { y: -40, duration: 1 })
// .from('.screen2__list__li', { y: 200, stagger: 0.1, opacity: 0 }, '0')
// .from('.screen2__screen2', { opacity: 0 }, '>-=-0.3')
// .to('.screen2__phone-warpper', { overflow: 'hidden' }, '<')

ScrollTrigger.create({
  trigger: '.section2',
  start: 'top top',
  end: 'bottom top',
  animation: sec1,
  scrub: 3,
  pin: '.section2',
})
// ScrollTrigger.create({
//   trigger: '.section2__screen2',
//   start: 'top top',
//   end: 'bottom top',
//   animation: sec2,
//   scrub: 2,
//   pin: '.section2__screen2',
// })

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical', // vertical, horizontal
  mouseMultiplier: 1.2,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
