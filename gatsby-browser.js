import './src/scss/main.scss'

import SmoothScroll from 'smooth-scroll'

const LINK_SELECTOR = 'a[href*="#"]'
new SmoothScroll(LINK_SELECTOR, {
  speed: 1500,
  speedAsDuration: true,
})

// When one would go to /de/#contact from external, one would stay at the top of the page.
// onInitialClientRender is called on the initial render of the gatsby page and tiggers a
// navigation to the current location which scrolls to the desired section.

export const onInitialClientRender = () => {
  window.___navigate(window.location.href)
}
