"use client";

import { useState } from "react";

export default function Quote() {
  const [step, setStep] = useState(1);

  return (
    <main className="bg-black text-white min-h-screen p-10 max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Get a Quote
      </h1>

      {/* STEP INDICATOR */}
      <div className="flex justify-between mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className={step === s ? "font-bold" : "text-gray-500"}>
            Step {s}
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h2 className="text-xl mb-4">Select Signage Type</h2>

          <div className="grid grid-cols-2 gap-4">
            {["LED", "Acrylic", "3D", "Metal", "Flex"].map((type) => (
              <button
                key={type}
                className="p-4 border border-white/20 rounded-lg hover:bg-white/10"
              >
                {type}
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            className="mt-6 bg-white text-black px-6 py-2 rounded-full"
          >
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h2 className="text-xl mb-4">Project Details</h2>

          <input
            placeholder="Size (e.g. 4x2 ft)"
            className="w-full p-3 mb-4 bg-black border border-white/20 rounded"
          />

          <textarea
            placeholder="Additional requirements"
            className="w-full p-3 mb-4 bg-black border border-white/20 rounded"
          />

          <div className="flex justify-between">
            <button onClick={() => setStep(1)}>Back</button>
            <button
              onClick={() => setStep(3)}
              className="bg-white text-black px-6 py-2 rounded-full"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h2 className="text-xl mb-4">Contact Info</h2>

          <input
            placeholder="Name"
            className="w-full p-3 mb-4 bg-black border border-white/20 rounded"
          />

          <input
            placeholder="Email"
            className="w-full p-3 mb-4 bg-black border border-white/20 rounded"
          />

          <input
            placeholder="Phone"
            className="w-full p-3 mb-4 bg-black border border-white/20 rounded"
          />

          <div className="flex justify-between">
            <button onClick={() => setStep(2)}>Back</button>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              Submit
            </button>
          </div>
        </div>
      )}

    </main>
  );
}