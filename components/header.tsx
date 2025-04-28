"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Head from "next/head"

const allCoupons = {
  prepladder: [
    {
      id: 1,
      store: "PrepLadder",
      title: "PrepLadder 90% Discount Coupon Code",
    },
    {
      id: 2,
      store: "PrepLadder",
      title: "₹1500 Off Prepladder Coupon Code",
    },
    {
      id: 3,
      store: "PrepLadder",
      title: "Upto 40% Off on All Plans",
    },
  ],
  meded: [
    {
      id: 4,
      store: "MedEd",
      title: "Upto 50% Off PWMED ED Plans",
    },
  ],
  medace: [
    {
      id: 5,
      store: "Medace",
      title: "Instant 50% Off + Free Extension",
    },
  ],
  egurukul: [
    {
      id: 6,
      store: "Egurukul",
      title: "Upto 50% Off + Free Extension",
    },
  ],
  dbmci: [
    {
      id: 7,
      store: "DBMCI",
      title: "Up to 50% Off DBMCI Offer",
    },
  ],
  cerebellum: [
    {
      id: 8,
      store: "Cerebellum",
      title: "Upto 50% Off Second Prof Plan",
    },
    {
      id: 9,
      store: "Cerebellum",
      title: "Mission 200+ FMGE Plan Coupon",
    },
    {
      id: 10,
      store: "Cerebellum",
      title: "First + Second Prof Combined Plan",
    },
  ],
  dams: [
    {
      id: 11,
      store: "DAMS",
      title: "20% Off + Free Extension",
    },
  ],
}

function getAllKeywords() {
  const keywords: string[] = []
  for (const store in allCoupons) {
    allCoupons[store as keyof typeof allCoupons].forEach((coupon) => {
      keywords.push(coupon.title)
    })
  }
  return keywords.join(", ")
}

export function Header() {
  const keywords = getAllKeywords()

  return (
    <>
      <Head>
        <title>Best Neet PG and FMGE Coupon Codes</title>
        <meta
          name="description"
          content="Get the best discount codes for Prepladder, Egurukul, DBMCI, MedEd, MedAce, Cerebellum, and DAMS. Save big on NEET PG, FMGE, MDS, NEXT exams."
        />
        <meta
          name="keywords"
          content={keywords}
        />
      </Head>
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <h1 className="text-xl font-bold">Neet Pg and Fmge Discount Code</h1>
              <div className="absolute -right-6 -top-1">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 12 2 2 4-4" />
                </svg> */}
              </div>
            </div>
            {/* <div className="relative w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div> */}
          </Link>
        </div>
      </header>
    </>
  )
}
