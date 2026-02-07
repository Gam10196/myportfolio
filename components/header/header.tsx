import Link from "next/link"
export default function Header() {
  return (
    <header className="border flex items-center justify-between px-50 py-4 bg-white">
      <div>
        <h1 className="text-xl font-semibold">Gamaliel C. Octobre</h1>
        <p className="text-sm text-gray-500">Aspiring Web Developer</p>
      </div>

      <nav className="flex gap-6 text-gray-700">
        <Link href="/" className="hover:text-gray-500">Home</Link>
        <Link href="/about" className="hover:text-gray-500">About</Link>
        <Link href="/projects" className="hover:text-gray-500">Projects</Link>
        <Link href="/blogs" className="hover:text-gray-500">Blogs</Link>
        <Link href="/contacts" className="hover:text-gray-500">Contacts</Link>
      </nav>
    </header>
  )
}