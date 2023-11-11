const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
gsap.from("#top-text",{

  y: -25,
  duration: 1.5,
  delay: 1,
  stagger: 0.5,
  opacity: 0
})