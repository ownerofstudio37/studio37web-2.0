import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Studio37',
  description: 'Photography and videography tips, trends, and behind-the-scenes.',
};

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-gray-600 mb-8">
        Blog posts coming soon. Stay tuned for photography tips and behind-the-scenes content.
      </p>
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <article
            key={i}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-2">Blog Post {i}</h2>
            <p className="text-gray-600 mb-4">
              This is a placeholder for blog post content. Real posts will be displayed here.
            </p>
            <a href="#" className="text-orange-500 hover:text-orange-600 font-semibold">
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
