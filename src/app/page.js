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

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
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

    </main>
  );
}