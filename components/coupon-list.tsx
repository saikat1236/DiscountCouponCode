"use client"

import { useState } from "react"
import { Heart, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { CouponModal } from "@/components/coupon-modal"

// Database of all coupons
const allCoupons = {
  prepladder: [
    {
      id: 1,
      store: "PrepLadder",
      storeSlug: "prepladder",
      title: "PrepLadder 90% Discount Coupon Code",
      description: "Use this code and get max discount on Pro plans, Ellite plans, FMGE, NEXT PG, PROFF plan, etc",
      discount: "90% discount",
      days: 5,
      verified: true,
      liked: false,
      badge: "BEST PRICE",
      badgeColor: "bg-red-500",
      code: "DEBNQ94W",
      logo: "/prepladder.jpg?height=300&width=300&text=PL",
    },
    {
      id: 2,
      store: "PrepLadder",
      storeSlug: "prepladder",
      title: "₹1500 Off Prepladder Coupon Code",
      description: "1500 Off Prepladder promo Code, Discount on Prepladder packs for MEDICAL PG, FMGE, SS, PROFF PACKS",
      discount: "Rs 1500 Off",
      days: 3,
      verified: true,
      liked: false,
      badge: "FLAT DEAL",
      badgeColor: "bg-blue-500",
      code: "SUPERSAVER",
      logo: "/prepladder.jpg?height=300&width=300&text=PL",
    },
    {
      id: 3,
      store: "PrepLadder",
      storeSlug: "prepladder",
      title: "Upto 40% Off on All Plans",
      description: "Use this coupon code to get upto 40% discount on all Prepladder plans",
      discount: "40% Off",
      days: 4,
      verified: true,
      liked: false,
      badge: "LIMITED TIME",
      badgeColor: "bg-yellow-500",
      code: "SUPERSAVER",
      logo: "/prepladder.jpg?height=300&width=300&text=PL",
    },
  ],
  meded: [
    {
      id: 4,
      store: "MedEd",
      storeSlug: "meded",
      title: "Upto 50% Off PWMED ED Plans",
      description: "Use this code to get upto 50% discount on all PWMED ED plans",
      discount: "50% Off",
      days: 7,
      verified: true,
      liked: false,
      badge: "POPULAR",
      badgeColor: "bg-green-500",
      code: "PWMED50",
      logo: "/meded.jpg?height=300&width=300&text=ME",
    },
  ],
  medace: [
    {
      id: 5,
      store: "Medace",
      storeSlug: "medace",
      title: "Instant 50% Off + Free Extension",
      description: "Use this code to get instant 50% discount + free extension depending on your plans",
      discount: "50% Off",
      days: 6,
      verified: true,
      liked: false,
      badge: "INSTANT OFF",
      badgeColor: "bg-purple-500",
      code: "ARIN26",
      logo: "/medace.jpg?height=300&width=300&text=MC",
    },
  ],
  egurukul: [
    {
      id: 6,
      store: "Egurukul",
      storeSlug: "egurukul",
      title: "Upto 50% Off + Free Extension",
      description: "Up to 50% Off + free extension Egurukul Coupon Code, Discount & Offer on Egurukul packs for NEET PG/NEXT, Dental MDS BDS, FMGE/NEXT, USMLE and renewal extension.",
      discount: "50% Off",
      days: 5,
      verified: true,
      liked: false,
      badge: "BEST SELLER",
      badgeColor: "bg-yellow-500",
      code: "ARI345",
      logo: "/egurukul.jpg?height=300&width=300&text=EG",
    },
  ],
  dbmci: [
    {
      id: 7,
      store: "DBMCI",
      storeSlug: "dbmci",
      title: "Up to 50% Off Egurukul Offer",
      description: "Up to 50% Off + free extension Egurukul Coupon Code, Discount & Offer on Egurukul packs for NEET PG/NEXT, Dental MDS BDS, FMGE/NEXT, USMLE and renewal extension.",
      discount: "50% Off",
      days: 5,
      verified: true,
      liked: false,
      badge: "SHARED CODE",
      badgeColor: "bg-indigo-500",
      code: "same as e gurukul",
      logo: "/dbmci.jpg?height=300&width=300&text=DM",
    },
  ],
  cerebellum: [
    {
      id: 8,
      store: "Cerebellum",
      storeSlug: "cerebellum",
      title: "Upto 50% Off Second Prof Plan",
      description: "Cerebellum Coupon Code For Second Prof Plan (FMGE)",
      discount: "50% Off",
      days: 6,
      verified: true,
      liked: false,
      badge: "BEST PICK",
      badgeColor: "bg-orange-500",
      code: "ADR35",
      logo: "/cerebellum.jpg?height=300&width=300&text=CR",
    },
    {
      id: 9,
      store: "Cerebellum",
      storeSlug: "cerebellum",
      title: "Mission 200+ FMGE Plan Coupon",
      description: "Cerebellum Coupon Code for Mission 200+ FMGE Plan (6 Months Validity)",
      discount: "50% Off",
      days: 6,
      verified: true,
      liked: false,
      badge: "TRENDING",
      badgeColor: "bg-teal-500",
      code: "FLAT195",
      logo: "/cerebellum.jpg?height=300&width=300&text=CR",
    },
    {
      id: 10,
      store: "Cerebellum",
      storeSlug: "cerebellum",
      title: "First + Second Prof Combined Plan",
      description: "Cerebellum Coupon Code for First + Second Prof Combined Plan (FMGE)",
      discount: "50% Off",
      days: 6,
      verified: true,
      liked: false,
      badge: "EXTRA SAVINGS",
      badgeColor: "bg-blue-600",
      code: "STUDENT",
      logo: "/cerebellum.jpg?height=300&width=300&text=CR",
    },
  ],
  dams: [
    {
      id: 11,
      store: "DAMS",
      storeSlug: "dams",
      title: "20% Off + Free Extension",
      description: "Use this code to get extra 20% discount + free extension depending on your plans",
      discount: "20% Off",
      days: 4,
      verified: true,
      liked: false,
      badge: "BEST PRICE",
      badgeColor: "bg-red-500",
      code: "ArinMED345",
      logo: "/dams.jpg?height=300&width=300&text=DM",
    },
  ],
}

// Flatten the coupons for the homepage
const flattenedCoupons = Object.values(allCoupons).flat()

export function CouponList() {
  const [couponsState, setCouponsState] = useState(flattenedCoupons)
  const [selectedCoupon, setSelectedCoupon] = useState<(typeof flattenedCoupons)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleLike = (id: number) => {
    setCouponsState(couponsState.map((coupon) => (coupon.id === id ? { ...coupon, liked: !coupon.liked } : coupon)))
  }

  const openCouponModal = (coupon: (typeof flattenedCoupons)[0]) => {
    setSelectedCoupon(coupon)
    setIsModalOpen(true)
  }

  return (
    <>
      {/* <div className="mb-6 flex overflow-x-auto space-x-2 pb-2">
        <Button variant="outline" className="rounded-full whitespace-nowrap">
          All
        </Button>
        <Button variant="outline" className="rounded-full whitespace-nowrap">
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
            <path d="M8.8 12L7 3h10l-1.8 9H8.8z" />
            <path d="M12 12v9" />
            <path d="M20 16.2V3h4" />
            <path d="M4 3h4v13.2" />
            <path d="M4 8h3" />
            <path d="M17 8h3" />
          </svg>
          Deals
        </Button>
        <Button variant="outline" className="rounded-full whitespace-nowrap">
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
            <path d="M3 6v18h18" />
            <path d="M7 15c0 1 1 2 2 2s2-1 2-2-1-2-2-2-2 1-2 2" />
            <path d="M15 15c0 1 1 2 2 2s2-1 2-2-1-2-2-2-2 1-2 2" />
            <path d="M7 7c0 1 1 2 2 2s2-1 2-2-1-2-2-2-2 1-2 2" />
            <path d="M15 7c0 1 1 2 2 2s2-1 2-2-1-2-2-2-2 1-2 2" />
          </svg>
          Coupons
        </Button>
        <Button variant="outline" className="rounded-full whitespace-nowrap">
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
            <path d="m20 6-8.5 8.5-4-4L3 15" />
            <path d="M15 6h5v5" />
          </svg>
          Sales
        </Button>
        <Button variant="outline" className="rounded-full whitespace-nowrap">
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
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
          Expired
        </Button>
      </div> */}

      <div className="space-y-6">
        {couponsState.map((coupon) => (
          <Card key={coupon.id} className="overflow-hidden relative">
            {coupon.badge && (
              <div
                className={`absolute top-0 left-0 ${coupon.badgeColor} text-white py-1 px-3 rotate-[-45deg] translate-x-[-30%] translate-y-[-10%] text-xs font-bold`}
                style={{ width: "150px", textAlign: "center" }}
              >
                {coupon.badge}
              </div>
            )}
            <div className="flex flex-col md:flex-row">
              <div className="p-4 md:w-28 flex items-center justify-center bg-gray-50 border-r relative">
                <Link href={`/store/${coupon.storeSlug}`}>
                  <Image
                    src={coupon.logo || "/placeholder.svg"}
                    alt={coupon.store}
                    width={200}
                    height={200}
                    className="rounded"
                  />
                </Link>
                {/* <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-2 right-2 ${coupon.liked ? "text-red-500" : "text-gray-400"}`}
                  onClick={() => toggleLike(coupon.id)}
                >
                  <Heart className={coupon.liked ? "fill-current" : ""} size={16} />
                  <span className="sr-only">Like</span>
                </Button> */}
              </div>
              <div className="flex-1 p-4">
                {/* <div className="flex items-center text-sm text-gray-500 mb-2">
                  {coupon.days && (
                    <div className="flex items-center mr-4">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{coupon.days} days ago</span>
                    </div>
                  )}
                  {coupon.months && (
                    <div className="flex items-center mr-4">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{coupon.months} months ago</span>
                    </div>
                  )}
                  {coupon.verified && (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      <span>Verified</span>
                    </div>
                  )}
                </div> */}
                <Link href={`/store/${coupon.storeSlug}`}>
                  <h3 className="font-semibold text-lg mb-1 hover:text-orange-500">{coupon.title}</h3>
                </Link>
                <div className="font-bold text-lg text-orange-500 mb-2">{coupon.discount}</div>
                <p className="text-sm text-gray-700">{coupon.description}</p>
              </div>
              <div className="p-4 flex items-center justify-center">
                {/* <Badge className="uppercase" variant="outline">
                  COUPON
                </Badge> */}
                              <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => openCouponModal(coupon)}>
                REVEAL COUPON
              </Button>
              </div>
            </div>
            {/* <div className="bg-gray-50 p-4 flex justify-end border-t">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => openCouponModal(coupon)}>
                REVEAL COUPON
              </Button>
            </div> */}
          </Card>
        ))}
      </div>

      <CouponModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} coupon={selectedCoupon} />
    </>
  )
}
