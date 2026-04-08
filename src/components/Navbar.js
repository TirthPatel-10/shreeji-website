import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">SHREEJI ART</h1>

        <div className="space-x-6 hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}