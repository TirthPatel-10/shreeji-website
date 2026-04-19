"use client";

import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { title: "LED Shop Board", category: "LED" },
    { title: "Acrylic Office Sign", category: "Acrylic" },
    { title: "3D Letter Branding", category: "3D" },
    { title: "Metal Name Plate", category: "Metal" },
    { title: "Flex Banner", category: "Flex" },
    { title: "LED Billboard", category: "LED" },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-black text-white min-h-screen p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Projects
      </h1>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "LED", "Acrylic", "3D", "Metal", "Flex"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
              filter === cat
                ? "bg-white text-black"
                : "border-white/20 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400">{project.category}</p>
          </div>
        ))}
      </div>

    </main>
  );
}