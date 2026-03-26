'use client'

import gsap from "gsap"
import { RefObject, useLayoutEffect } from "react"
import { heroAnimation } from "../animations/hero"

export const useHeroAnimation=(ref:RefObject<HTMLDivElement>)=>{
    useLayoutEffect(()=>{
        const ctx=gsap.context(()=>{
            heroAnimation(ref.current);
        })
        return ()=>ctx.revert();
    },[])
}