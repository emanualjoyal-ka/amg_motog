import gsap from "gsap";

export const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".hero", {
    x:100,
    opacity: 0,
    duration:0.5
  })
  .from(".title",{
    y:50,
    opacity:0,
  },"-=0.3")
  .from(".subtitle", {
    y: 50,
    opacity: 0,
    stagger:0.06
  }, "-=0.5")
  .from(".btn", {
    y:50,
    opacity:0,
    stagger:0.06
  }, "-=0.3")
  .from(".feat",{
    y:50,
    opacity:0,
    stagger:0.06
  })
};