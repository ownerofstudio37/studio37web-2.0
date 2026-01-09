import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Studio37',
  description: 'Professional photography, videography, and marketing services.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Professional Photography',
      description: 'High-quality portraits, events, products, and landscapes.',
      features: ['Event Photography', 'Portraits', 'Product Shots', 'Real Estate'],
    },
    {
      title: 'Videography',
      description: 'Cinematic video production for events and marketing.',
      features: ['Event Videos', 'Commercials', 'Social Media', 'Reels'],
    },
    {
      title: 'Marketing Services',
      description: 'Strategic marketing to help grow your business.',
      features: ['Content Strategy', 'Social Media', 'Photo Editing', 'Consulting'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Services</h1>
      <p className="text-lg text-gray-600 mb-12">
        We offer a full range of creative services to help your business stand out.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, j) => (
                <li key={j} className="flex items-center">
                  <span className="text-orange-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
