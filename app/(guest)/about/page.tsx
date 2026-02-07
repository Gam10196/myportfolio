import Image from "next/image"

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

  <div className="border p-6 rounded-lg">
    <h1 className="text-3xl font-bold mb-4">About Me</h1>
    <p className="text-gray-700 leading-relaxed">
      I am a beginner web developer passionate about learning and creating web applications. 
      Through practice and small projects, I’m improving my skills in HTML, CSS, JavaScript, and React/Next.js.
    </p>
  </div>

</div>

  )
}
