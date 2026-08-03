gsap.registerPlugin(ScrollTrigger);

gsap.from(".nav", {
  y: "-200%",
  duration: 1,
  ease: "power4.out",
});

gsap.from(".nav .logo", {
  scale: 0,
  opacity: 0,
  duration: 2,
  ease: "bounce.out",
});

gsap.from(".nav .links li", {
  scale: 0,
  duration: 2,
  ease: "bounce.out",
  stagger: 0.2,
});

gsap.from(".page1 h1", {
  y: "30%",
  opacity: 0,
  duration: 2,
  // ease: "sine.out",
});

gsap.from(".page1 p", {
  y: "40%",
  opacity: 0,
  duration: 2,
  delay: 0.5,
  // ease: "sine.out",
});

gsap.from(".page1 button", {
  y: "50%",
  opacity: 0,
  duration: 2,
  delay: 1,
  // ease: ".out",
});

// gsap.to(".page2 .info1 .cards .card", {

// })

// gsap.from(".info1 .card", {
//   y: 80,
//   opacity: 0,
//   stagger: 0.15,
//   duration: 1,
//   ease: "power4.out",

//   scrollTrigger: {
//     trigger: ".info1",
//     start: "top 50%",
//     markers: true,
//     // scrub: 2
//   },
// })

// gsap.from(".info2 .card", {
//   y: 80,
//   opacity: 0,
//   stagger: 0.15,
//   duration: 1,
//   ease: "power4.out",

//   scrollTrigger: {
//     trigger: ".info2",
//     start: "top 50%",
//     markers: true,
//     triggerAction: "play reverse",
//     // scrub: 2
//   },
// })


// Info 1 Cards
gsap.from(".info1 .card", {
  y: 50,
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".info1",
    start: "top 75%",
    toggleActions: "play none play reverse",
    // scrub: 2,
    // markers: true
  },
});

// Info 2 Cards
gsap.from(".info2 .card", {
  y: 50,
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".info2",
    start: "top 75%",
    toggleActions: "play none none reverse",
    // markers: true
  },
});