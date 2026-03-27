"use client";

import { useGSAP } from "@gsap/react";
import { navBarAnimation } from "../animations/navBar";
import { RefObject } from "react";


export const useNavBarAnimation = (scope:RefObject<HTMLDivElement | null>) => {
  useGSAP(() => {
    navBarAnimation();
    
  }, { scope });
};