export default function Services() {
  return (
    <main className="bg-black text-white">

      <section className="py-24 max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-16">
          Our Services
        </h1>

        {/* SERVICE 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-4">LED Sign Boards</h2>
            <p className="text-gray-400 mb-4">
              Energy-efficient, high-visibility signage for modern branding.
            </p>

            <ul className="text-gray-400 space-y-2">
              <li>• Indoor & Outdoor</li>
              <li>• Long-lasting LEDs</li>
              <li>• Custom designs</li>
            </ul>
          </div>

          <div className="h-60 bg-white/5 rounded-xl"></div>
        </div>

        {/* SERVICE 2 (reverse layout) */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div className="h-60 bg-white/5 rounded-xl"></div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Acrylic Signage</h2>
            <p className="text-gray-400 mb-4">
              Premium and sleek signage with a modern finish.
            </p>

            <ul className="text-gray-400 space-y-2">
              <li>• Glossy finish</li>
              <li>• Durable material</li>
              <li>• Elegant design</li>
            </ul>
          </div>
        </div>

        {/* SERVICE 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-4">3D Letter Signs</h2>
            <p className="text-gray-400 mb-4">
              Bold and dimensional lettering for impactful branding.
            </p>

            <ul className="text-gray-400 space-y-2">
              <li>• Custom fonts</li>
              <li>• Premium finish</li>
              <li>• Indoor/Outdoor use</li>
            </ul>
          </div>

          <div className="h-60 bg-white/5 rounded-xl"></div>
        </div>

      </section>

    </main>
  );
}