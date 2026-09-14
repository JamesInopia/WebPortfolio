import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
      <main className="flex-1 flex flex-col gap-4 p-6 min-w-0">
        <section className="flex items-center gap-4 p-8 min-w-0">
          <div className="flex-1 p-2 min-w-0">
            <div>Want to start a project together?</div>
            <div>Or you know just say hello.</div>
          </div>
          <div className="flex-1 p-2 min-w-0">
            <div className="border-b-2 border-white">Reach out to me via:</div>
            <div className="flex flex-col">
              <Link href="https://github.com/JamesInopia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 hover:bg-white group">
                  <FaGithub size={20} className="transition-colors duration-300 group-hover:text-black" />
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}