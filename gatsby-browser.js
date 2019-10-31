import SmoothScroll from 'smooth-scroll'

const LINK_SELECTOR = 'a[href*="#"]'
new SmoothScroll(LINK_SELECTOR, {
  speed: 1500,
  speedAsDuration: true,
})
