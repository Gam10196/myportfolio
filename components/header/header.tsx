export default function Header() {
  return (
    <header className="border flex items-center justify-between px-50 py-4 bg-white shadow">

      <div>
        <h1 className="text-xl font-semibold">JohnloveRheza</h1>
        <p className="text-sm text-gray-500">ayaw i unsent John</p>
      </div>

      <nav className="flex gap-6 text-gray-700">
        <div className="cursor-pointer hover:text-gray-500">Home</div>
        <div className="cursor-pointer hover:text-gray-500">About</div>
        <div className="cursor-pointer hover:text-gray-500">Projects</div>
        <div className="cursor-pointer hover:text-gray-500">Blogs</div>
        <div className="cursor-pointer hover:text-gray-500">Contact</div>
      </nav>

    </header>
  )
}