import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Title, Subtitle, Accent } from "../components/SlideLayout";

export const DemoSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const copilotScale = spring({ frame: frame - 20, fps, config: { damping: 15 } });
  const pulseScale = 1 + 0.05 * Math.sin(frame * 0.1);

  const demoItems = [
    "Inline completions with partial accept",
    "Chat with /explain and /tests",
    "Agent mode scaffolding",
    "Code review before commit",
  ];

  const takeaways = [
    "Comment-first development",
    "Context is everything (+ button)",
    "Custom instructions = consistency",
    "Agent mode for heavy lifting",
  ];

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)",
        fontFamily: "'Inter', sans-serif",
        padding: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Animated Copilot Icon */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        style={{
          marginBottom: 30,
          transform: `scale(${Math.max(0, copilotScale) * pulseScale})`,
        }}
      >
        <defs>
          <linearGradient id="copilotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#copilotGrad)"
          strokeWidth="3"
          style={{ filter: "drop-shadow(0 0 10px rgba(0, 229, 255, 0.5))" }}
        />
        <path
          d="M50 15 C25 15 15 35 15 50 C15 70 30 85 50 85 C70 85 85 70 85 50 C85 35 75 15 50 15 M35 45 C38 45 40 47 40 50 C40 53 38 55 35 55 C32 55 30 53 30 50 C30 47 32 45 35 45 M65 45 C68 45 70 47 70 50 C70 53 68 55 65 55 C62 55 60 53 60 50 C60 47 62 45 65 45 M35 65 Q50 75 65 65"
          fill="none"
          stroke="url(#copilotGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <h1
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 72,
          fontWeight: 700,
          textAlign: "center",
          margin: 0,
          opacity: interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        Live Demo Time
      </h1>

      <p
        style={{
          fontSize: 28,
          color: "#94A3B8",
          marginTop: 20,
          opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        Let's see GitHub Copilot in action
      </p>

      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 50,
          maxWidth: 900,
        }}
      >
        {/* Demo Items */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
            padding: 28,
            flex: 1,
            opacity: interpolate(frame, [50, 70], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateX(${interpolate(frame, [50, 70], [-30, 0], { extrapolateRight: "clamp" })}px)`,
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 16 }}>✨</div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              fontWeight: 600,
              color: "#F8FAFC",
              margin: 0,
              marginBottom: 16,
            }}
          >
            We'll Demo
          </h3>
          {demoItems.map((item, i) => (
            <p
              key={item}
              style={{
                fontSize: 16,
                color: "#94A3B8",
                margin: 0,
                marginBottom: 8,
                opacity: interpolate(frame, [70 + i * 8, 80 + i * 8], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              • {item}
            </p>
          ))}
        </div>

        {/* Takeaways */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: 16,
            padding: 28,
            flex: 1,
            opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateX(${interpolate(frame, [60, 80], [30, 0], { extrapolateRight: "clamp" })}px)`,
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 16 }}>🎯</div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
              fontWeight: 600,
              color: "#F8FAFC",
              margin: 0,
              marginBottom: 16,
            }}
          >
            Key Takeaways
          </h3>
          {takeaways.map((item, i) => (
            <p
              key={item}
              style={{
                fontSize: 16,
                color: "#94A3B8",
                margin: 0,
                marginBottom: 8,
                opacity: interpolate(frame, [85 + i * 8, 95 + i * 8], [0, 1], { extrapolateRight: "clamp" }),
              }}
            >
              • {item}
            </p>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
