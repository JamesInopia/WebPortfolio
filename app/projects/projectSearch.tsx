"use client";
import { useMemo, useState } from "react";
import type { Project } from "@/app/lib/projects";

type Props = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

export function ProjectSearch({ projects, onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const matches = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return projects.filter((p) => p.title.toLowerCase().includes(q));
  }, [query, projects]);

  function handleSelect(p: Project) {
    onSelect(p);
    setQuery(p.title);
    setOpen(false);
  }

  function handleClear() {
    setQuery("");
    setOpen(false);
  }

  return (
    <div className="relative flex-1">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        placeholder="Search projects..."
        className="w-full border border-black/20 rounded-md pl-4 pr-9 py-2 outline-none bg-white text-black"
      />

      {query && (
        <button
          type="button"
          onMouseDown={handleClear}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-black/40 hover:text-black/70 text-lg leading-none px-1"
        >
          ×
        </button>
      )}

      {open && query.trim() && (
        <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-black/20 rounded-md z-20 overflow-hidden shadow-sm">
          {matches.length > 0 ? (
            matches.map((p) => (
              <li key={p.title}>
                <button
                  type="button"
                  onMouseDown={() => handleSelect(p)}
                  className="w-full text-left px-4 py-2 text-black hover:bg-black/5"
                >
                  {p.title}
                </button>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-black/60">
              No projects match your search.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}