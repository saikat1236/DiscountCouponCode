import { Header } from "@/components/header"
import { StoreCoupons } from "@/components/store-coupons"
import { StoreSidebar } from "@/components/store-sidebar"

// Store data database
const storeData = {
  prepladder: {
    name: "PrepLadder",
    logo: "/prepladder.jpg?height=300&width=300&text=PL",
    discount: "Upto 95% off",
    rating: 3.75,
    votes: 4,
    categories: ["Education", "Medical", "All categories"],
  },
  cerebellum: {
    name: "Cerebellum",
    logo: "/cerebellum.jpg?height=300&width=300&text=CB",
    discount: "Upto 40% off",
    rating: 4.0,
    votes: 8,
    categories: ["Education", "Medical", "All categories"],
  },
  dams: {
    name: "Dams",
    logo: "/dams.jpg?height=300&width=300&text=DM",
    discount: "Upto 40% off",
    rating: 4.0,
    votes: 8,
    categories: ["Education", "Medical", "All categories"],
  },
  dbmci: {
    name: "DBMCI",
    logo: "/dbmci.jpg?height=300&width=300&text=DBMCI",
    discount: "Upto 40% off",
    rating: 4.0,
    votes: 8,
    categories: ["Education", "Medical", "All categories"],
  },
  egurukul: {
    name: "eGurukul",
    logo: "/egurukul.jpg?height=300&width=300&text=GK",
    discount: "35% Off",
    rating: 3.8,
    votes: 5,
    categories: ["Education", "All categories"],
  },
  meded: {
    name: "MedEd",
    logo: "/meded.jpg?height=300&width=300&text=ME",
    discount: "25% Off",
    rating: 3.6,
    votes: 7,
    categories: ["Education", "Medical", "All categories"],
  },
  medace:{
    name: "Medace",
    logo: "/medace.jpg?height=300&width=300&text=MD",
    discount: "25% Off",
    rating: 3.6,
    votes: 7,
    categories: ["Education", "Medical", "All categories"],
  }

}

export default function StorePage({ params }: { params: { slug: string } }) {
  // Get store data based on the slug
  const store = storeData[params.slug as keyof typeof storeData] || {
    name: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    logo: `/prepladder.jpg?height=300&width=300&text=${params.slug.substring(0, 2).toUpperCase()}`,
    discount: "Discount",
    rating: 0,
    votes: 0,
    categories: ["All categories"],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <StoreSidebar store={store} />
          </div>
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold mb-6">{store.name} Coupon & Deals</h1>
            <StoreCoupons storeName={store.name} />
          </div>
        </div>
      </main>
    </div>
  )
}
