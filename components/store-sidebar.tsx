import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample store data with logos for "Other shops" section
const otherStores = [
  {
    id: 1,
    name: "PrepLadder",
    slug: "prepladder",
    logo: "/prepladder.jpg?height=300&width=300&text=PL",
  },
  {
    id: 2,
    name: "Cerebellum",
    slug: "cerebellum",
    logo: "/cerebellum.jpg?height=300&width=300&text=CB",
  },
  {
    id: 3,
    name: "Dams",
    slug: "dams",
    logo: "/dams.jpg?height=300&width=300&text=DA",
  },
  {
    id: 4,
    name: "DBMCI",
    slug: "dbmci",
    logo: "/dbmci.jpg?height=300&width=300&text=DBMCI",
  },
  {
    id: 5,
    name: "eGurukul",
    slug: "egurukul",
    logo: "/egurukul.jpg?height=300&width=300&text=EG",
  },
  {
    id: 6,
    name: "MedEd",
    slug: "meded",
    logo: "/meded.jpg?height=300&width=300&text=ME",
  },
  {
    id: 7,
    name: "MedAce",
    slug: "medace",
    logo: "/medace.jpg?height=300&width=300&text=ME",
  },
]

interface StoreSidebarProps {
  store: {
    name: string
    logo: string
    discount: string
    rating: number
    votes: number
    categories: string[]
  }
}

export function StoreSidebar({ store }: StoreSidebarProps) {
  // Filter out the current store from other stores
  const filteredStores = otherStores.filter((s) => s.name.toLowerCase() !== store.name.toLowerCase())

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center">
            <Image
              src={store.logo || "/dams.jpg?height=300&width=300&text=" + "DA"}
              alt={store.name}
              width={200}
              height={200}
              className="mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{store.name}</h2>
            <div className="text-orange-500 font-bold text-xl mb-2">{store.discount}</div>
            <div className="mb-4">
              {/* <div className="text-sm">
                User Rating: {store.rating} ({store.votes} votes)
              </div> */}
              {/* <div className="flex items-center justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(store.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div> */}
            </div>
            {/* <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
              GO TO SHOP
            </Button> */}
          </div>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {store.categories.map((category, i) => (
              <li key={i} className="flex items-center gap-2">
                <input type="radio" id={`category-${i}`} name="category" className="h-4 w-4 text-orange-500" />
                <label htmlFor={`category-${i}`} className="text-sm cursor-pointer">
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle>Other shops</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {filteredStores.slice(0, 7).map((otherStore) => (
              <Link
                key={otherStore.id}
                href={`/store/${otherStore.slug}`}
                className="flex items-center justify-center p-2 border rounded hover:border-orange-500 transition-colors"
              >
                <Image
                  src={otherStore.logo || "/placeholder.svg"}
                  alt={otherStore.name}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
