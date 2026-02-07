import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Facebook, Folder} from "lucide-react"


export default function Homepage() {
  return (
    <div className="defaultpage p-6">

      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
        <div>

          <h1 className="text-4xl font-bold mb-5">
            Hi, I&apos;m Gam
          </h1>

          <p className="max-w-xl text-gray-600 mb-6">
            I’m a beginner web developer who is learning how to create websites and improve my skills 
            through practice and small projects.
          </p>

          <div className="flex gap-4 mb-4">
            <Link href="/projects">
              <Button className="bg-black hover:bg-gray-900 text-white px-5 flex gap-2 items-center">
                <Folder className="w-5 h-5" />
                View My Work
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" className="px-8">       
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="flex gap-2">
            <Link
              href="https://github.com/Gam10196"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Github size={22} />
            </Link>

            <Link
              href="https://www.facebook.com/gamaliel10196/"
              target="_blank"
              className="p-2 rounded-full hover:bg-gray-200 transition"
            >
              <Facebook size={22} />
            </Link>
          </div>

        </div>

        <div className="rounded-full p-2 shadow-md">
          <Image
            src="/gams.jpg"
            alt="Gams"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>

      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center rounded-lg bg-gray-200 p-2 mb-2 w-auto max-w-sm">
          <h1 className="text-md">Recent Projects</h1>
        </div>

        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Check out my recent work
          </h1>
          <p>
            Here are some of my recent projects where I practice, learn, and improve my web development skills.
          </p>
        </div>
      </div>

    </div>
  )
}
