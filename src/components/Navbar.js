export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">SHREEJI ART</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}