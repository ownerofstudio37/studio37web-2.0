export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Studio37</h1>
        <p className="text-xl text-gray-300 mb-8">
          Photography • Videography • Marketing
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/gallery"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            View Gallery
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
