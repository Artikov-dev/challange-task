import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Burger Business</h3>
            <p className="mb-4">
              Serving delicious gourmet burgers since 2010. Visit one of our locations or order online.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-red-400 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  History
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Brand Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  How to Order
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Product
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Promo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Payment Method
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Other</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Burger Business. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

