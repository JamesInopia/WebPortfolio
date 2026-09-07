import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import image from "./placeholder.jpg";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
      <div className="flex min-h-screen">
      <header className="flex flex-col gap-2 p-6 basis-[20%] h-screen sticky top-0 self-start">
        <div className="flex flex-col justify-between items-center w-full h-full">
          <div className="flex flex-col p-4 gap-4">
            <button>Home</button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
          <div className="flex flex-col">
            <div>
              <Link href="https://github.com/JamesInopia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <FaGithub size={20} />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col text-sm">
            &copy; {currentYear} James Angelo Inopia
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col gap-4 p-6 min-w-0">
        <section className="flex gap-4 p-8 min-w-0">
          <div className="flex-1 p-2 min-w-0 relative h-96">
            <Image src={image} alt="hi" fill className="object-cover"/>
            <div className="absolute inset-0 flex flex-col justify-center text-white">
              <div className="text-6xl">Hello World!</div>
              <div className="text-4xl">I am,</div>
              <div className="text-4xl">James</div>
              <div className="text-4xl">Angelo</div>
              <div className="text-4xl">Inopia</div>
            </div>
          </div>
          <div className="flex-1 p-2 min-w-0">
            <div className="border-b-2 border-white">About Me</div>
            <div>I am a Software Engineer.. IDK WHAT ELSE TO SAY HUHU</div>
          </div>
        </section>
      </main>
    </div>
  );
}