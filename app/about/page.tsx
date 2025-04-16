import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <Navigation /> */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About DiscountCouponCode</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              DiscountCouponCode is a website that provides the latest and most comprehensive collection of coupons and
              deals for online shoppers. Our mission is to help you save money while shopping online by offering you the
              best deals and discounts from the top retailers and brands.
            </p>

            <p className="mb-4">
              Our team of experts scours the internet to find the best deals and discounts available, and we update our
              site regularly to ensure that you have access to the most up-to-date coupons and promo codes. Whether
              you're looking for clothing, electronics, travel, or home goods, you can find great deals on our site for
              a wide range of products and services.
            </p>

            <p className="mb-4">
              We pride ourselves on providing our users with a user-friendly experience that makes it easy to find the
              coupons and deals you need. Our site is easy to navigate, and our search function allows you to quickly
              find the coupons and deals that are relevant to you.
            </p>

            <p className="mb-4">
              In addition to providing coupons and deals, we also offer helpful resources and guides to help you make
              the most of your online shopping experience. Our blog features tips and tricks for saving money while
              shopping online, as well as reviews of the latest products and services.
            </p>

            <p className="mb-8">
              At DiscountCouponCode, we are committed to providing our users with the best possible experience. We value
              your feedback and suggestions, so please don't hesitate to contact us if you have any questions or
              comments. Thank you for choosing DiscountCouponCode for all of your online shopping needs!
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Values</h2>

            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">
                <strong>Accuracy:</strong> We verify all coupons and deals to ensure they work.
              </li>
              <li className="mb-2">
                <strong>Timeliness:</strong> We constantly update our database to provide the most current offers.
              </li>
              <li className="mb-2">
                <strong>User-Focused:</strong> We design our platform with your needs in mind.
              </li>
              <li className="mb-2">
                <strong>Transparency:</strong> We clearly mark expired deals and provide accurate information.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How It Works</h2>

            <ol className="list-decimal pl-6 mb-8">
              <li className="mb-2">
                <strong>Find a Deal:</strong> Browse our categories or search for specific stores.
              </li>
              <li className="mb-2">
                <strong>Reveal the Coupon:</strong> Click the "Reveal Coupon" button to see the code.
              </li>
              <li className="mb-2">
                <strong>Shop and Save:</strong> Use the code at checkout to enjoy your discount.
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
