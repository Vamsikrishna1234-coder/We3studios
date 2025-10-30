import React from "react";

const statsData = [
  { label: "Projects Completed", value: "250+" },
  { label: "Happy Clients", value: "180+" },
  { label: "Years of Experience", value: "5+" },
  { label: "Team Members", value: "10+" },
  { label: "Design Awards", value: "7" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 text-center via-gray-800 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
         Our <span className="text-yellow-400">Achievements</span>
        </h2>

        <div className="row justify-content-center">
          {statsData.map((stat, i) => (
            <div key={i} className="col-6 col-md-2 mb-4">
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
