import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import image from "./placeholder.jpg";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
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
            <div className="border-b-2 border-white">About This Project</div>
            <div>This web portfolio is designed to specifically showcase my projects and experiences as a programmer for proof of my expertise. The portfolio showcases the types of projects I have worked on, my education, as well as links to my socials in case you would like to reach out.</div>
          </div>
          <div className="flex-1 p-2 min-w-0 relative h-96">
            <Image src={image} alt="hi" fill className="object-cover"/>
          </div>
        </section>
      </main>
  );
}