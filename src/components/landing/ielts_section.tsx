"use client";
import Image from "next/image";
import Link from "next/link";

export default function IELTSSection() {
  // Skill items data
  const skillItems = [
    {
      icon: "icons/pen-tool.svg",
      title: "Writing",
    },
    {
      icon: "icons/radio.svg",
      title: "Listening",
    },
    {
      icon: "icons/book-open.svg",
      title: "Reading",
    },
    {
      icon: "icons/mic.svg",
      title: "Speaking",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-16 px-4 md:px-8 lg:px-12">
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Left column - Skill items */}
          <div className="flex flex-col items-center space-y-6">
            {skillItems.map((skill, index) => (
              <SkillItem
                key={index}
                icon={skill.icon}
                title={skill.title}
                position={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          {/* Right column - Content */}
          <div className="flex flex-col space-y-6">
            <h2
              style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.2" }}
            >
              Provides{" "}
              <span style={{ color: "#2563EB" }}>all IELTS skills</span> in one
              complete program with{" "}
              <span style={{ color: "#2563EB" }}>expert guidance</span> and{" "}
              <span style={{ color: "#2563EB" }}>structured practice</span>
            </h2>

            <p style={{ color: "#4B5563", fontSize: "1.125rem" }}>
              {"Find out your current IELTS Skill, and we'll give you steps"}
              {"recommended to make your IELTS score higher"}
            </p>

            <div>
              <Link
                href="/test-skill"
                style={{
                  display: "inline-block",
                  backgroundColor: "#2563EB",
                  color: "white",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "0.375rem",
                  fontWeight: "500",
                  transition: "background-color 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1D4ED8")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2563EB")
                }
              >
                Test Your Skill Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable skill item component with position prop
function SkillItem({
  icon,
  title,
  position = "left",
}: {
  icon: string;
  title: string;
  position?: "left" | "right";
}) {
  const wrapperStyle = {
    position: "relative" as const,
    width: "100%",
    maxWidth: "320px",
    marginLeft: position === "left" ? "0" : "2rem",
    marginRight: position === "right" ? "0" : "2rem",
  };

  const gradientStyle = {
    position: "absolute" as const,
    width: "280px",
    height: "150px",
    borderRadius: "50%",
    top: "-40px",
    left: position === "left" ? "20px" : "-40px",
    background:
      "radial-gradient(circle, rgba(219,234,254,0.8) 0%, rgba(219,234,254,0.1) 100%)",
    filter: "blur(25px)",
    zIndex: -1,
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "1rem",
    width: "100%",
    borderRadius: "0.75rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    position: "relative" as const,
    zIndex: 1,
  };

  return (
    <div style={wrapperStyle}>
      <div style={gradientStyle}></div>
      <div style={containerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{ color: "#2563EB", width: "1.5rem", height: "1.5rem" }}>
            <Image
              src={icon}
              alt={`${title} icon`}
              width={24}
              height={24}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <span style={{ fontWeight: "500" }}>{title}</span>
        </div>
        <div
          style={{
            backgroundColor: "#3B82F6",
            color: "white",
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.375rem",
          }}
        >
          with mentor
        </div>
      </div>
    </div>
  );
}
