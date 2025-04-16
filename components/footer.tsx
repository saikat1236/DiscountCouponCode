import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About DiscountCouponCode</h3>
            <p className="text-gray-600">
              DiscountCouponCode provides the latest and most comprehensive collection of coupons and deals for online
              shoppers. Our mission is to help you save money while shopping online.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-red-500 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-red-500 hover:underline">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link href="/privacy" className="text-red-500 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-red-500 hover:underline">
                  Terms of Service
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter to get the latest deals and coupons.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} DiscountCouponCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
