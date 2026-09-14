import "server-only";

export type Project = { slug: string; title: string; year: number; image: string, description: string };
const PROJECTS: Project[] = [
{ slug: "kawaii-count", title: "Kawaii Count", year: 2025, image: "/KawaiiCount.png",
description: "Kawaii Count is a Restaurant Inventory System application that is designed for cafes or small coffee shops. The app combines functionality such as an analytics page, an inventory page, a Menu system, and a login and sign-up page for employees and administrators to access the application." },
{ slug: "spellaria", title: "Spellaria", year: 2026, image: "/Spellaria.png",
description: "Spellaria is a turn-based strategy puzzle game in which players must spell words from a given set of letters in order to defeat their enemies in a limited amount of time. This game is highly inspired by the game Bookworm Adventures. The game challenges players to think critically by combining word‑building with tactical decision‑making." },
{ slug: "yaw8", title: "YAW8", year: 2026, image: "/YAW8.jpg",
description: "Lets residents pin a broken streetlight on a map." },
{ slug: "grace-p", title: "Grace.", year: 2026, image: "/Grace.png",
description: "Grace. is a productivity app that can block applications or websites, or set timers for applications to help users focus on important tasks and practice better time management." },
];
export const getProjects = async () => PROJECTS;
export const getProject = async (slug: string) => PROJECTS.find((p) => p.slug === slug);