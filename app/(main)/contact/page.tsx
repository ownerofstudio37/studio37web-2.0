import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Studio37',
  description: 'Get in touch with Studio37 for your photography and videography needs.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="bg-gray-50 p-8 rounded-lg mb-8">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Service Interest
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-transparent">
              <option value="">Select a service</option>
              <option value="photography">Photography</option>
              <option value="videography">Videography</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-transparent"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">Email</h3>
          <a href="mailto:hello@studio37.cc" className="text-orange-500 hover:text-orange-600">
            hello@studio37.cc
          </a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Phone</h3>
          <a href="tel:+19361234567" className="text-orange-500 hover:text-orange-600">
            (936) 123-4567
          </a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Service Areas</h3>
          <p className="text-gray-600">
            Magnolia, TX<br />
            Pinehurst, TX<br />
            Greater Houston Area
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Availability</h3>
          <p className="text-gray-600">
            Available for bookings<br />
            Weekends & Weekdays<br />
            Flexible scheduling
          </p>
        </div>
      </div>
    </div>
  );
}
