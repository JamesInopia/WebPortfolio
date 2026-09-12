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
        <section className="flex items-center gap-4 p-8 min-w-0">
          <div className="flex-1 p-2 min-w-0 relative h-96">
            <Image src={image} alt="hi" fill className="object-cover"/>
            <div className=" p-3 absolute inset-0 flex flex-col justify-end items-start text-white">
              <div className="text-6xl border-b-2 border-white">James Angelo Inopia</div>
              <div className="text-l">Aspiring Software Engineer</div>
            </div>
          </div>
          <div className="flex-1 p-2 min-w-0">
            <div className="border-b-2 border-white">About Me</div>
            <div>Hello World! I am James Angelo Inopia, currently at my third year studying at iACADEMY Cebu, pursuing a degree in Bachelor of Science in Computer Science, majoring in Software Engineering (BSCS-SE). I am passionate about learning and strive to create meaningful digital experiences.</div>
          </div>
        </section>
        <section className="flex items-center gap-4 p-8 min-w-0">
          <div className="flex-1 p-2 min-w-0">
            <div className="border-b-2 border-white">About Me</div>
            <div>Hello World! I am James Angelo Inopia, currently at my third year studying at iACADEMY Cebu, pursuing a degree in Bachelor of Science in Computer Science, majoring in Software Engineering (BSCS-SE). I am passionate about learning and strive to create meaningful digital experiences.</div>
          </div>
          <div className="flex-1 p-2 min-w-0 relative h-96">
            <Image src={image} alt="hi" fill className="object-cover"/>
            <div className=" p-3 absolute inset-0 flex flex-col justify-end items-start text-white">
              <div className="text-6xl border-b-2 border-white">James Angelo Inopia</div>
              <div className="text-l">Aspiring Software Engineer</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}