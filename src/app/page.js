import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          Premium Signage Solutions
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          Industrial strength meets creative excellence. Indoor, outdoor and terrace signage solutions.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 ease-in-out">
          Get a Quote
        </button>
      </section>

      {/* STATS SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="p-6 border border-gray-800 rounded-xl">
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-400">Projects Completed</p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl">
            <h2 className="text-3xl font-bold">300+</h2>
            <p className="text-gray-400">Clients Served</p>
          </div>

          <div className="p-6 border border-gray-800 rounded-xl">
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="text-gray-400">Years Experience</p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition duration-300 ease-in-out duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">LED Sign Boards</h3>
              <p className="text-gray-400">
                Bright, energy-efficient signage for indoor and outdoor branding.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Acrylic Signage</h3>
              <p className="text-gray-400">
                Modern and sleek signage solutions with premium finish.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">3D Letter Signs</h3>
              <p className="text-gray-400">
                Dimensional lettering for a bold and professional look.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Metal Signage</h3>
              <p className="text-gray-400">
                Stainless steel and brass signage for durability and elegance.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Flex Boards</h3>
              <p className="text-gray-400">
                Cost-effective and versatile signage for promotions.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold mb-2">Custom Signage</h3>
              <p className="text-gray-400">
                Tailored solutions based on your brand and requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}