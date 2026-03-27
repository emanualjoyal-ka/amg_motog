"use client";

import { useGSAP } from "@gsap/react";
import { heroAnimation } from "../animations/hero";
import { RefObject } from "react";

export const useHeroAnimation = (scope:RefObject<HTMLDivElement | null>) => {
  useGSAP(() => {
    heroAnimation();
    
  }, { scope });
};