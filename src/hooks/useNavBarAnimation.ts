'use client'

import gsap from "gsap"
import { RefObject, useLayoutEffect } from "react"
import { navBarAnimation } from "../animations/navBar"

export const useNavBarAnimation=(ref:RefObject<HTMLDivElement>)=>{
    useLayoutEffect(()=>{
        const ctx=gsap.context(()=>{
            navBarAnimation(ref.current);
        })
        return ()=>ctx.revert();
    },[])
}