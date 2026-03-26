import gsap from 'gsap';

export const heroAnimation=(container:HTMLDivElement)=>{
    const tl=gsap.timeline();
    tl.from(container.querySelector(".heading"),{
        x:-80,
        opacity:0
    })
    .from(container.querySelector(".subtext"),{
         x:-80,
        opacity:0
    })
    .from(container.querySelector(".btn"),{
         x:-80,
        opacity:0
    })
    .from(container.querySelector(".features"),{
         x:-80,
        opacity:0
    })
}