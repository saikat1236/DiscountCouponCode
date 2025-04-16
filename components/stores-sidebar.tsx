import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Sample store data with logos
const popularStores = [
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
    logo: "/dams.jpg?height=300&width=300&text=PL",
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
    logo: "/medace.jpg?height=300&width=300&text=PL",
  },
]

const categories = ["Education", "Medical", "Technology", "Fashion", "Food", "Travel", "Entertainment"]

export function StoresSidebar() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Popular Stores</CardTitle>
        </CardHeader>
        <CardContent>
  <div className="flex gap-4 overflow-x-auto scrollbar py-2">
    {popularStores.map((store) => (
      <Link
        key={store.id}
        href={`/store/${store.slug}`}
        className="flex-shrink-0 flex items-center justify-center p-2 rounded hover:border-orange-500 transition-colors min-w-[200px] h-[200px]"
      >
        <Image
          src={store.logo || "/placeholder.svg"}
          alt={store.name}
          width={200}
          height={200}
          className="rounded"
        />
      </Link>
    ))}
  </div>
</CardContent>

      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, i) => (
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
    </div>
  )
}
