import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Studio37',
  description: 'Browse our latest photography and videography projects.',
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Gallery</h1>
      <p className="text-gray-600 mb-8">
        Gallery coming soon. Projects will be displayed here.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
