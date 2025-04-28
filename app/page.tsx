import { Header } from "@/components/header";
import { CouponList } from "@/components/coupon-list";
import { StoresSidebar } from "@/components/stores-sidebar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
// import banner from "../images/banner.mp4";

export default function Home() {
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
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="relative h-[80vh] md:h-[60vh] overflow-hidden">
          <video
            autoPlay
            muted
            loop
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100%] md:w-[100%] h-[80vh] md:h-[60vh] object-cover z-0"
          >
            <source src="/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-lg md:text-xl">
              Check out our amazing offers and features!
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <StoresSidebar />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="col-span-3">
            <h1 className="text-2xl font-bold mb-6">Latest Coupons & Deals</h1>
            <CouponList />
          </div>
        </div>
        {/* make a responsive image slider below */}
        <div className="mt-8 mb-8 flex justify-center items-center gap-4 scrollbar overflow-x-scroll">
          <Image src={img1} alt="PrepLadder" width={300} height={300} />
          <Image src={img2} alt="PrepLadder" width={300} height={300} />
          <Image src={img3} alt="PrepLadder" width={300} height={300} />
          <Image src={img4} alt="PrepLadder" width={300} height={300} />
          <Image src={img5} alt="PrepLadder" width={300} height={300} />
          <Image src={img6} alt="PrepLadder" width={300} height={300} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
