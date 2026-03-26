import gsap from 'gsap';

export const navBarAnimation=(container:HTMLDivElement)=>{
    const tl=gsap.timeline();
    tl.from(container.querySelector(".title"),{
        y:-80,
        opacity:0
    })
    .from(container.querySelector(".menu"),{
         y:-80,
        opacity:0
    })
    .from(container.querySelector(".btn"),{
         y:-80,
        opacity:0
    })
}