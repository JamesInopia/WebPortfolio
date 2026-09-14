"use client";

import { useState, useLayoutEffect, useRef, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { NavContext } from "./navRouter";

export default function TransitionProvider({
  nav,
  children,
}: {
  nav: ReactNode;
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  const [displayChildren, setDisplayChildren] = useState(children);
  const [displayPathname, setDisplayPathname] = useState(pathname);
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);

  if (targetHref && pathname === targetHref && isAnimating) {
    setDisplayChildren(children);
    setDisplayPathname(pathname);
    setTargetHref(null);
    setIsAnimating(false);
  }

  const navigate = (href: string) => {
    if (href === pathname || isAnimating) return;
    setTargetHref(href);
    setIsAnimating(true);
  };

  // Locks page when transitioning
  useLayoutEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [displayPathname]);

  return (
    <NavContext.Provider value={navigate}>
      <div
        ref={scrollRef}
        className={`flex h-screen w-full scrollbar-hide ${
        isAnimating ? "overflow-hidden" : "overflow-y-auto"
      }`}
      >
        {nav}

        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (targetHref) router.push(targetHref);
          }}
        >
          {!isAnimating && (
            <motion.div
              key={displayPathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 min-w-0"
            >
              {displayChildren}
            </motion.div>
          )}
        </AnimatePresence>

        {isAnimating && (
          <div className="fixed inset-0 z-50 cursor-wait" aria-hidden="true" />
        )}
      </div>
    </NavContext.Provider>
  );
}