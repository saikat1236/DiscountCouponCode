import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Sidebar() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Check other stores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <Link
                key={i}
                href="#"
                className="flex items-center justify-center p-2 border rounded hover:border-red-500 transition-colors"
              >
                <Image src={`/placeholder.svg?height=40&width=40`} alt={`Store ${i + 1}`} width={40} height={40} />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[
              "TechGadgets Ultimate live",
              "FashionHub SS",
              "HomeDecor SS",
              "BeautyEssentials SS",
              "FoodDelivery SS",
            ].map((post, i) => (
              <li key={i}>
                <Link href="#" className="text-red-500 hover:underline">
                  {post}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {["Electronics", "Fashion", "Home & Garden", "Health & Beauty", "Food & Dining", "Travel", "Education"].map(
              (category, i) => (
                <li key={i}>
                  <Link href="#" className="text-red-500 hover:underline">
                    {category}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle>Archives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {["April 2025", "March 2025", "February 2025", "January 2025", "December 2024", "November 2024"].map(
              (month, i) => (
                <li key={i}>
                  <Link href="#" className="text-red-500 hover:underline">
                    {month}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
