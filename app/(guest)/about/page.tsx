import Image from "next/image"
import { Code } from "lucide-react"
export default function AboutPage() {
  return (
    <div className="px-50 py-6">

  <div className="flex items-start gap-6 mb-12">
    <div className="p-2 shadow-gray-300">
      <Image
        src="/gampp.jpg"
        alt="Gams"
        width={150}
        height={150}
        className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
      />
    </div>

    <div className="mt-20">
      <h1 className="text-2xl font-bold">Gamaliel C. Octobre</h1>
      <p className="text-gray-600">An aspiring Web Developer</p>
    </div>
  </div>

  <div className="border border-gray-300 p-6 rounded-lg">
    <h1 className="text-3xl font-bold mb-4">About Me</h1>
    <p className="text-gray-700 leading-relaxed">
      I am a beginner web developer passionate about learning and creating web applications. 
      Through practice and small projects, I’m improving my skills in HTML, CSS, JavaScript, and React/Next.js.
    </p>
  </div>

  <div className="mt-5 flex flex-col items-start border border-gray-300 rounded-lg p-6 gap-4">
    <h1 className="flex items-center gap-2 text-xl font-semibold">
      <Code size={20} />
      Tech Stack
    </h1>

    <div>
      <h1 className="text-sm font-semibold">Front End</h1>
      <div className="flex flex-wrap gap-5 mt-2">
        <span className="text-xs px-1 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md">HTML</span>
        <span className="text-xs px-1 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md">CSS</span>
        <span className="text-xs px-1 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md">JavaScript</span>
        <span className="text-xs px-1 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md">Reactjs</span>
        <span className="text-xs px-1 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md">Nextjs</span>
        <span className="text-xs px-1 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md">TailwinCSS</span>
        <span className="text-xs px-1 py-1 border border-gray-300 rounded-md text-gray-700 cursor-default transition hover:bg-gray-200 hover:shadow-md">Shadcn</span>
      </div>

    </div>
  </div>
</div>

  )
}
