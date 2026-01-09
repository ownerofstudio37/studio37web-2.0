export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-studio-dark text-white flex flex-col justify-center items-center px-4 py-20">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Professional Photography in Pinehurst, Texas
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Award-winning portrait, wedding, corporate, and commercial photography 
            serving Pinehurst, Magnolia, and the greater Houston area
          </p>
          <div className="flex gap-4 justify-center pt-8 flex-wrap">
            <a
              href="/gallery"
              className="px-8 py-4 bg-studio-orange text-white text-lg rounded-lg hover:opacity-90 transition font-semibold"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-gray-700 text-white text-lg rounded-lg hover:bg-gray-600 transition font-semibold"
            >
              Get a Quote
            </a>
          </div>
          <p className="text-sm text-gray-400 pt-4">
            Serving 120+ mile radius • Same-day consultations available
          </p>
        </div>
      </section>

      {/* Photography Types Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-studio-dark mb-4">
              Photography Services We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Specialized photography for every occasion and business need
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait Photography",
                desc: "Professional headshots, family portraits, and personal branding photos",
                seo: "Pinehurst portrait photographer"
              },
              {
                title: "Wedding Photography",
                desc: "Capturing your special day with artistic style and emotional storytelling",
                seo: "Pinehurst wedding photographer"
              },
              {
                title: "Corporate Photography",
                desc: "Team photos, executive headshots, and corporate event coverage",
                seo: "Pinehurst business photography"
              },
              {
                title: "Product Photography",
                desc: "E-commerce and catalog photography that sells",
                seo: "Professional product photography"
              },
              {
                title: "Real Estate Photography",
                desc: "High-quality home and property listing photography",
                seo: "Pinehurst real estate photographer"
              },
              {
                title: "Event Photography",
                desc: "Conferences, galas, and special event documentation",
                seo: "Professional event photography"
              },
            ].map((service, i) => (
              <div key={i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-studio-orange transition">
                <div className="w-12 h-12 bg-studio-orange rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold text-studio-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-sm text-gray-400 italic">{service.seo}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/gallery"
              className="inline-block px-8 py-4 bg-studio-orange text-white rounded-lg hover:opacity-90 transition font-semibold"
            >
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Section - Local SEO */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-studio-dark mb-4">
              Serving Pinehurst, Magnolia & Beyond
            </h2>
            <p className="text-xl text-gray-600">
              Photography services within 120 miles of Pinehurst, Texas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-studio-dark">Primary Service Area</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-studio-orange mr-3 font-bold">•</span>
                  <span><strong>Pinehurst, TX</strong> - Home base with same-day consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-studio-orange mr-3 font-bold">•</span>
                  <span><strong>Magnolia, TX</strong> - Next growth market, premium service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-studio-orange mr-3 font-bold">•</span>
                  <span><strong>Greater Houston Area</strong> - Full service coverage</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-studio-dark">Expanded Coverage</h3>
              <p className="text-gray-700 mb-4">
                We travel up to <strong>120 miles</strong> from Pinehurst to serve:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                <li>• The Woodlands</li>
                <li>• Spring</li>
                <li>• Conroe</li>
                <li>• Tomball</li>
                <li>• Kingwood</li>
                <li>• Cypress</li>
                <li>• Galveston</li>
                <li>• And more</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-l-4 border-studio-orange p-8 rounded">
            <p className="text-gray-700 text-lg">
              <strong>Starting your photography journey?</strong> Contact us for a free consultation to discuss your needs and see if we're the right fit for your project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-studio-dark text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300">
            Let's create stunning images that tell your story. Available for bookings in Pinehurst, Magnolia, and surrounding areas.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="px-8 py-4 bg-studio-orange text-white text-lg rounded-lg hover:opacity-90 transition font-semibold"
            >
              Request a Quote
            </a>
            <a
              href="tel:+1234567890"
              className="px-8 py-4 border-2 border-white text-white text-lg rounded-lg hover:bg-white hover:text-studio-dark transition font-semibold"
            >
              Call Us
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Based in Pinehurst, TX • Serving the Greater Houston Area
          </p>
        </div>
      </section>
    </main>
  );
}
