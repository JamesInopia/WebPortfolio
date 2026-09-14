import Link from "next/link";
import type { Project } from "@/app/lib/projects";

type Props = { projects: Project[] };
export function ProjectList({ projects }: Props) {
  return (
    <ul className="mt-8 space-y-4 text-xl">
      {projects.map((p) => (
        <li key={p.slug}>
          <Link href={`/projects/${p.slug}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}