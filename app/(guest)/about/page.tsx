import Image from "next/image";
import { Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="px-50 py-2">

      {/* Cover Banner */}
      <div className="relative bg-[url('/coverp.png')] bg-cover bg-center rounded-lg h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative flex items-start gap-6 -mt-24 z-10">
        {/* Profile Image */}
        <div className="m-4 p-2 shadow-xl rounded-full bg-white mt-4">
          <Image
            src="/gampp.jpg"
            alt="Gams"
            width={150}
            height={150}
            className="rounded-full transition-all duration-300 hover:scale-105"
          />
        </div>

        {/* Name & Title */}
        <div className="mt-25 -ml-2">
          <h1 className="text-2xl md:text-3xl font-bold">Gamaliel C. Octobre</h1>
          <p className="text-gray-600">An aspiring Web Developer</p>
        </div>
      </div>

      <div className="border border-gray-300 p-6 rounded-lg mt-10">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 leading-relaxed text-justify">
          Hi, I am Gamaliel C. Octobre from Danao. I am currently studying at Cordova Public College (CPC), where I am developing my knowledge in information technology and web development. I am an aspiring web developer who enjoys creating websites and working on small projects to practice my skills and gain experience. I am especially interested in front-end development and learning how to build clean, user-friendly designs. In my free time, I explore tutorials, coding resources, and new tools to improve my abilities. My goal is to continuously grow as a developer and one day work on real-world projects that can help people and businesses.
        </p>
      </div>

      <div className="flex flex-col items-start border border-gray-300 rounded-lg p-6 gap-4 mt-10">
        <h1 className="flex items-center gap-2 text-xl font-semibold">
          <Code size={20} />
          Tech Stack
        </h1>

        <div>
          <h1 className="text-sm font-semibold">Front End</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            {["HTML","CSS","JavaScript","Reactjs","Nextjs","TailwindCSS","Shadcn"].map((tech) => (
              <span 
                key={tech} 
                className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
