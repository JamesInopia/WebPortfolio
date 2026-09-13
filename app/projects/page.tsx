import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import image from "../placeholder.jpg";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
      <main className="flex-1 flex flex-col items-center justify-center gap-4 p-20 min-w-0">
        <div className="text-7xl">Content Here is Coming Soon</div>
      </main>
  );
}