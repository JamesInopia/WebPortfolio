"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import type { Project } from "@/app/lib/projects";
import { ProjectSearch } from "./projectSearch";

import "swiper/css";
import "../globals.css";

const FADE_MS = 250;
const ITEM_HEIGHT = 56;

type Props = { projects: Project[] };

export function ProjectsClient({ projects }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const lockedRef = useRef(false);

  const [locked, setLocked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add("lock-scroll");
    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, []);

  function goToIndex(index: number) {
    if (lockedRef.current || !swiperRef.current) return;
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    if (clamped === activeIndex) return;

    lockedRef.current = true;
    setLocked(true);
    setVisible(false);

    setTimeout(() => {
      swiperRef.current!.slideTo(clamped);
      setActiveIndex(clamped);

      setTimeout(() => {
        setVisible(true);
        setTimeout(() => {
          lockedRef.current = false;
          setLocked(false);
        }, FADE_MS);
      }, swiperRef.current!.params.speed as number);
    }, FADE_MS);
  }

  function requestSlideChange(direction: "next" | "prev") {
    goToIndex(activeIndex + (direction === "next" ? 1 : -1));
  }

  function handleSearchSelect(project: Project) {
    const index = projects.findIndex((p) => p.slug === project.slug);
    if (index !== -1) goToIndex(index);
  }

  function onMainWheel(e: React.WheelEvent) {
    e.preventDefault();
    if (lockedRef.current) return;
    if (e.deltaY > 0) requestSlideChange("next");
    else if (e.deltaY < 0) requestSlideChange("prev");
  }

  function onCylinderWheel(e: React.WheelEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  const active = projects[activeIndex];

  return (
    <main className="flex-1 flex flex-col h-screen overflow-hidden p-10 gap-6 min-w-0">
      <div className="flex flex-col gap-2 shrink-0">
        <div className="flex flex-row items-center">
          <div className="w-20 shrink-0" />
          <ProjectSearch projects={projects} onSelect={handleSearchSelect} />
        </div>
        <div className="w-full h-px bg-black/60" />
      </div>

      <div className="flex-1 flex flex-row min-h-0">
        <div
          onWheel={onCylinderWheel}
          className="w-20 h-full overflow-hidden flex flex-col items-center justify-center gap-2"
        >
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => goToIndex(i)}
              style={{ height: ITEM_HEIGHT }}
              className={`w-full flex items-center justify-center text-lg tabular-nums shrink-0 transition-opacity ${
                i === activeIndex ? "opacity-100 font-semibold" : "opacity-40"
              }`}
            >
              {String(i + 1).padStart(3, "0")}
            </button>
          ))}
        </div>

        <div onWheel={onMainWheel} className="flex-1 flex flex-row min-w-0 items-center">
          <div className="relative w-960 aspect-video mx-8">
            <Swiper
              direction="vertical"
              slidesPerView={1}
              speed={600}
              allowTouchMove={false}
              onSwiper={(s) => (swiperRef.current = s)}
              className="w-full h-full"
            >
              {projects.map((p) => (
                <SwiperSlide key={p.slug}>
                  <div
                    className="relative w-full h-full"
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: `opacity ${FADE_MS}ms ease`,
                    }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {locked && <div className="absolute inset-0 z-10" />}
          </div>

          <div className="w-72 shrink-0 flex flex-col justify-center overflow-hidden">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease`,
              }}
            >
              <h2 className="text-2xl font-semibold border-b border-black pb-2 mb-4">
                {active.title}
              </h2>
              <p className="text-sm leading-relaxed">{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}