"use client";

import { createContext, useContext } from "react";

export const NavContext = createContext<(href: string) => void>(() => {});
export const useAnimatedNav = () => useContext(NavContext);