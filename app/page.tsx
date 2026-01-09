const heroImage =
  'https://res.cloudinary.com/dmjxho2rl/image/upload/v1759639187/A4B03835-ED8B-4FBB-A27E-1F2EE6CA1A18_1_105_c_gstgil_e_gen_restore_e_improve_e_sharpen_l_image_upload_My_Brand_IMG_2115_mtuowt_c_scale_fl_relative_w_0.40_o_80_fl_layer_apply_g_south_x_0.03_y_0.04_yqgycj.jpg';

const featuredShots = [
  {
    title: 'Wedding at Pinehurst Chapel',
    category: 'Wedding',
    location: 'Pinehurst, TX',
    image: heroImage,
  },
  {
    title: 'Executive Portraits',
    category: 'Corporate',
    location: 'Magnolia, TX',
    image: heroImage,
  },
  {
    title: 'Luxury Listing',
    category: 'Real Estate',
    location: 'The Woodlands, TX',
    image: heroImage,
  },
  {
    title: 'Product Launch',
    category: 'Product',
    location: 'Houston, TX',
    image: heroImage,
  },
  {
    title: 'Family Portraits',
    category: 'Portrait',
    location: 'Pinehurst, TX',
    image: heroImage,
  },
  {
    title: 'Corporate Event',
    category: 'Event',
    location: 'Conroe, TX',
    image: heroImage,
  },
];

const photographyServices = [
  {
    title: 'Portrait Photography',
    desc: 'Professional headshots, family portraits, and personal branding photos',
    seo: 'Pinehurst portrait photographer',
  },
  {
    title: 'Wedding Photography',
    desc: 'Capturing your special day with artistic style and emotional storytelling',
    seo: 'Pinehurst wedding photographer',
  },
  {
    title: 'Corporate Photography',
    desc: 'Team photos, executive headshots, and corporate event coverage',
    seo: 'Pinehurst business photography',
  },
  {
    title: 'Product Photography',
    desc: 'E-commerce and catalog photography that sells',
    seo: 'Professional product photography',
  },
  {
    title: 'Real Estate Photography',
    desc: 'High-quality home and property listing photography',
    seo: 'Pinehurst real estate photographer',
  },
  {
    title: 'Event Photography',
    desc: 'Conferences, galas, and special event documentation',
    seo: 'Professional event photography',
  },
];

const testimonials = [
  {
    quote: 'Studio37 nailed our wedding photos—every moment felt timeless.',
    name: 'Sophia & Ryan',
    location: 'Pinehurst, TX',
  },
  {
    quote: 'Clean, modern headshots for the whole team. Quick turnaround and flawless lighting.',
    name: 'J. Martin',
    location: 'Magnolia, TX',
  },
  {
    quote: 'Our listing sold above asking—photos made the home shine online.',
    name: 'Claire H.',
    location: 'The Woodlands, TX',
  },
];

export default function Home() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen text-white flex flex-col justify-center items-center px-4 py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(26,26,26,0.8), rgba(26,26,26,0.55)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" aria-hidden="true"></div>
        <div className="relative max-w-4xl text-center space-y-6">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-200">Studio37 • Pinehurst, TX</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Professional Photography in Pinehurst, Texas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            Award-winning portrait, wedding, corporate, and commercial photography serving Pinehurst, Magnolia, and the Greater Houston area
          </p>
          <div className="flex gap-4 justify-center pt-8 flex-wrap">
            <a
              href="/gallery"
              className="px-8 py-4 bg-studio-orange text-white text-lg rounded-lg hover:opacity-90 transition font-semibold shadow-lg shadow-orange-500/30"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white text-lg rounded-lg hover:bg-white/20 transition font-semibold"
            >
              Get a Quote
            </a>
          </div>
          <p className="text-sm text-gray-200 pt-4">
            Serving 120+ mile radius • Same-day consultations available
          </p>
        </div>
      </section>

      {/* Featured Shoots */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Featured work</p>
              <h2 className="text-4xl md:text-5xl font-bold text-studio-dark">Signature shoots</h2>
              <p className="text-lg text-gray-600 mt-2">Recent projects across Pinehurst, Magnolia, and the Houston area.</p>
            </div>
            <a
              href="/gallery"
              className="self-start inline-block px-5 py-3 bg-studio-orange text-white rounded-lg hover:opacity-90 transition font-semibold"
            >
              View full gallery
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredShots.map((shot, i) => (
              <div
                key={shot.title + i}
                className="group relative h-64 rounded-xl overflow-hidden bg-studio-dark"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.55)), url(${shot.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 transition group-hover:scale-105 group-hover:opacity-95"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white space-y-1 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-200">{shot.category}</p>
                  <h3 className="text-lg font-semibold">{shot.title}</h3>
                  <p className="text-sm text-gray-200">{shot.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Types Section */}
      <section className="py-20 px-4 bg-gray-50">
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
            {photographyServices.map((service, i) => (
              <div key={service.title + i} className="border-2 border-gray-200 rounded-lg p-6 hover:border-studio-orange transition bg-white shadow-sm">
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
      <section className="py-20 px-4 bg-white">
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

          <div className="bg-gray-50 border-l-4 border-studio-orange p-8 rounded">
            <p className="text-gray-700 text-lg">
              <strong>Starting your photography journey?</strong> Contact us for a free consultation to discuss your needs and see if we&apos;re the right fit for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials & Trust */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Social proof</p>
            <h2 className="text-4xl md:text-5xl font-bold text-studio-dark">Clients that trust us</h2>
            <p className="text-lg text-gray-600 mt-2">Local couples, businesses, and real estate teams across Pinehurst and Magnolia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name + i} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <p className="text-lg text-gray-800 mb-4">“{t.quote}”</p>
                <p className="text-sm font-semibold text-studio-dark">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200">5-star local ratings</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200">Fast turnarounds</span>
            <span className="px-4 py-2 rounded-full bg-white border border-gray-200">Commercial licensing</span>
          </div>
        </div>
      </section>

      {/* Contact / Quote */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-studio-dark">Request a quote</h2>
            <p className="text-lg text-gray-600 mt-2">
              Tell us about your shoot in Pinehurst, Magnolia, or anywhere in our 120-mile service area.
            </p>
          </div>

          <form className="grid gap-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-studio-orange"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-studio-orange"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-studio-orange"
              />
              <select
                name="service"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-studio-orange"
                defaultValue=""
              >
                <option value="" disabled>Select service type</option>
                <option>Portraits</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Product</option>
                <option>Real Estate</option>
                <option>Event</option>
              </select>
            </div>
            <textarea
              name="details"
              placeholder="Tell us about your project, location, and timeline"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-studio-orange"
            ></textarea>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p className="text-sm text-gray-500">Fast response for Pinehurst and Magnolia inquiries.</p>
              <button
                type="submit"
                className="px-6 py-3 bg-studio-orange text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Send request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-studio-dark text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300">
            Let&apos;s create stunning images that tell your story. Available for bookings in Pinehurst, Magnolia, and surrounding areas.
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
