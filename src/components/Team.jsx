import React, { useState } from "react";

const member1Front =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop";
const member2Front =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop";
const member3Front =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop";
const member4Front =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop";
const member5Front =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop";
const member6Front =
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop";

export default function TeamSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      name: "Vamsi Krishna",
      role: "Creative Director",
      frontImg: member1Front,
      bio: "10+ years of creative excellence",
    },
    {
      name: "Aarav Mehta",
      role: "3D Visualization Lead",
      frontImg: member2Front,
      bio: "Master of photorealistic renders",
    },
    {
      name: "Diya Sharma",
      role: "Motion Graphics Specialist",
      frontImg: member3Front,
      bio: "Bringing designs to life",
    },
    {
      name: "Rohan Patel",
      role: "Interior Architect",
      frontImg: member4Front,
      bio: "Transforming spaces beautifully",
    },
    {
      name: "Sneha Rao",
      role: "Exterior Designer",
      frontImg: member5Front,
      bio: "Crafting stunning exteriors",
    },
    {
      name: "Priya Singh",
      role: "Senior Designer",
      frontImg: member6Front,
      bio: "Innovation meets elegance",
    },
  ];

  // Detect mobile
  const isMobile = window.innerWidth < 768;

  return (
    <section className="bg-black py-20 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Our <span className="text-yellow-400">Creative Team</span>
        </h2>

        <div
          className="grid gap-10 justify-items-center sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              onMouseEnter={() => !isMobile && setHoveredCard(i)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onClick={() => isMobile && setHoveredCard(hoveredCard === i ? null : i)}
              style={{
                perspective: "1000px",
                width: "100%",
                maxWidth: "320px",
                height: "450px",
                cursor: "pointer",
              }}
            >
              {/* Card Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transform:
                    hoveredCard === i ? "rotateY(180deg)" : "rotateY(0deg)",
                  transition: "transform 0.6s ease-in-out",
                }}
              >
                {/* Front Side */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(18, 45, 74, 0.5)",
                    border: "3px solid #122d4a",
                  }}
                >
                  <img
                    src={member.frontImg}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), transparent)",
                      padding: "30px 20px 20px",
                      color: "#fff",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "#de6c0e",
                        marginBottom: "5px",
                      }}
                    >
                      {member.name}
                    </h5>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#fff",
                        fontStyle: "italic",
                      }}
                    >
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(18, 45, 74, 0.5)",
                    border: "3px solid #122d4a",
                    backgroundColor: "#081b2e",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "30px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(0,0,0,0.7)",
                      padding: "30px",
                      borderRadius: "15px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h5
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        color: "#de6c0e",
                        marginBottom: "10px",
                      }}
                    >
                      {member.name}
                    </h5>
                    <p
                      style={{
                        fontSize: "1.1rem",
                        color: "#fff",
                        fontWeight: "600",
                        marginBottom: "15px",
                        fontStyle: "italic",
                      }}
                    >
                      {member.role}
                    </p>
                    <div
                      style={{
                        width: "60px",
                        height: "2px",
                        background: "#de6c0e",
                        margin: "0 auto 15px",
                      }}
                    />
                    <p style={{ fontSize: "1rem", color: "#fff", lineHeight: "1.6" }}>
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
