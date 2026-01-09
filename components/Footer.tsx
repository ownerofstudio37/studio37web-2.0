export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4">Studio37</h3>
            <p className="text-gray-400">
              Professional photography, videography & marketing services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/gallery" className="hover:text-white transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-gray-400">
              <strong>Email:</strong> hello@studio37.cc
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong> (936) XXX-XXXX
            </p>
            <p className="text-gray-400">
              Magnolia & Pinehurst, TX
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Studio37. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
