import gsap from "gsap";

export const navBarAnimation = () => {

  const tl=gsap.timeline();
  tl.from(".title", {
    y: -80,
    opacity: 0,
    rotate: -10,
    duration: 0.5,
  })
    .from(".menu", {
      y: -80,
      opacity: 0,
      rotate: -10,
      duration: 0.5,
    })
    .from(".btn", {
      y: -80,
      opacity: 0,
      rotate: -10,
      duration: 0.5,
    });
};