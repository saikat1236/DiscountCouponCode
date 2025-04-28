import { Header } from "@/components/header"
import { StoreCoupons } from "@/components/store-coupons"
import { StoreSidebar } from "@/components/store-sidebar"
import  CouponSeo  from "@/components/head"
import { Metadata } from "next"
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

// ✅  Dynamic SEO metadata generator
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const store = storeData[params.slug as keyof typeof storeData] || {
    name: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    logo: `/default.jpg`,
    discount: "Discount",
    rating: 0,
    votes: 0,
    categories: ["All categories"],
  }

  const title = `${store.name} Coupons, Promo Codes & Deals | Upto ${store.discount}`
  const description = `Grab the latest verified discount coupons, deals, and promo codes for ${store.name}. Save big on ${store.categories.join(", ")} courses and more.`
  const keywords = `${store.name} coupons, ${store.name} promo codes, ${store.name} discounts, NEET PG coupons, FMGE discounts, medical education offers`

  const url = `https://neetpgandfmgediscountcode.com/store/${params.slug}`

  return {
    title,
    description,
    keywords: keywords.split(", "), // Next expects array for keywords
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: `https://neetpgandfmgediscountcode.com${store.logo}`,
          width: 800,
          height: 600,
          alt: `${store.name} Discount Coupons`
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://neetpgandfmgediscountcode.com${store.logo}`],
    },
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
