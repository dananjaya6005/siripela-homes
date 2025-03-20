import { Facebook, Instagram, Youtube, Clock, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-sm leading-relaxed mb-6">
              We have established a unique position among our customer minds as we use the latest technology & highest
              quality material for our construction work. As an esteemed player in the industry, we are pioneers in
              providing solutions in order to exceed our customer expectations.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-pink-600 p-2 rounded-md hover:bg-pink-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-md hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-md hover:bg-pink-700 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-md hover:bg-pink-700 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9 13.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="mt-1 flex-shrink-0" size={18} />
                <p className="text-sm">+9411 292 7505 | +9476 701 9696</p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-1 flex-shrink-0" size={18} />
                <p className="text-sm">info@siripela.lk</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <p className="text-sm">No.154/11, Pahala Biyanwila, Kadawatha.</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="mt-1 flex-shrink-0" size={18} />
                <p className="text-sm">Everyday 09.00 A.M -07.00 P.M</p>
              </div>
            </div>
          </div>

          {/* Main Menu Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Main Menu</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Designs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Property Types Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Property Types</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Single Storey Houses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Multi Storey Houses
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Commercial Buildings
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Ongoing Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gray-300 flex items-center">
                  <span className="mr-2">›</span> Completed Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-zinc-800 flex justify-between items-center">
          <p className="text-sm text-gray-400">Siripelahomes.lk ©2023 All rights reserved</p>
          <a href="#" className="text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

