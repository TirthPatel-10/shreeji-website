import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Premium Signage Solutions
        </h1>
      </section>

      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-6">
          Industrial Meets Creative
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          High-end signage solutions for indoor, outdoor and terrace branding.
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
          Get a Quote
        </button>
      </section>
    </main>
  );
}