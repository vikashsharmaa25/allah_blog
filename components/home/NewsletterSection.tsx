'use client'

export const NewsletterSection = () => {
  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, updates, and Islamic resources.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="grow px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-white text-emerald-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>

          <p className="text-sm text-emerald-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
