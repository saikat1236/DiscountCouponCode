import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-red-500 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto">
          <li>
            <Link href="/stores" className="block px-4 py-3 hover:bg-red-600 transition-colors whitespace-nowrap">
              All Stores
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block px-4 py-3 hover:bg-red-600 transition-colors whitespace-nowrap">
              Blogs
            </Link>
          </li>
          {/* <li>
            <Link href="/categories" className="block px-4 py-3 hover:bg-red-600 transition-colors whitespace-nowrap">
              Categories
            </Link>
          </li> */}
          <li>
            <Link href="/popular" className="block px-4 py-3 hover:bg-red-600 transition-colors whitespace-nowrap">
              Popular Deals
            </Link>
          </li>
          <li>
            <Link href="/new" className="block px-4 py-3 hover:bg-red-600 transition-colors whitespace-nowrap">
              New Arrivals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
