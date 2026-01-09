export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-studio-dark">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Studio37</h1>
        <p className="text-xl text-gray-300 mb-8">
          Photography • Videography • Marketing
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/gallery"
            className="px-6 py-3 bg-studio-orange text-white rounded-lg hover:opacity-90 transition"
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
