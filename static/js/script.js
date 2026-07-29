const tl = gsap.timeline()

tl.from(".nav", {
  y: "-200%",
  duration: 1,
  ease: "power3.out",
})

gsap.from(".nav .logo", {
  delay: 1,
  scale: 0,
  rotate: 360,
  backgroundColor: "lime",
  duration: 1.5,
  ease: "power3.out",
})

gsap.from(".nav .links li", {
  delay: 1,
  scale: 0,
  backgroundColor: "lime",
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.2,
})

tl.from(".page1 h1", {
  x: "-200%",
  duration: 1,
  ease: "power3.out",
})

tl.from(".page1 p", {
  x: "500%",
  duration: 1,
  ease: "power3.out",
})

tl.from(".page1 button", {
  y: "500%",
  duration: 1,
  ease: "power3.out",
})
