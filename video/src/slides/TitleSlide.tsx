import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Img } from "remotion";
import { SlideLayout, Title, Subtitle, Accent, Stat } from "../components/SlideLayout";

export const TitleSlide: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 12 } });
  const glowOpacity = interpolate(frame, [30, 60], [0, 0.6], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
          transform: `scale(${logoScale})`,
        }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGrad)" strokeWidth="3" />
          <path
            d="M30 50 L45 65 L70 35"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 28,
            fontWeight: 600,
            color: "#94A3B8",
          }}
        >
          +
        </span>
        <svg width="80" height="80" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="vsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <rect x="15" y="15" width="70" height="70" rx="8" fill="none" stroke="url(#vsGrad)" strokeWidth="3" />
          <text x="50" y="62" textAnchor="middle" fill="url(#vsGrad)" fontSize="32" fontWeight="700">
            VS
          </text>
        </svg>
      </div>

      {/* Title with glow effect */}
      <div style={{ position: "relative" }}>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            margin: 0,
            background: "linear-gradient(135deg, #F8FAFC, #94A3B8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GitHub Copilot in Visual Studio
        </h1>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            filter: "blur(20px)",
            opacity: glowOpacity,
          }}
        >
          GitHub Copilot in Visual Studio
        </div>
      </div>

      <Subtitle delay={20}>Your AI Pair Programmer</Subtitle>

      <p
        style={{
          fontSize: 22,
          color: "#64748B",
          textAlign: "center",
          maxWidth: 800,
          marginTop: 30,
          opacity: interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        From autocomplete to autonomous agent — the complete AI-powered coding experience
      </p>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: 80,
          marginTop: 60,
        }}
      >
        <Stat value="1M+" label="Developers Using Copilot" delay={40} />
        <Stat value="55%" label="Faster Task Completion" delay={50} />
        <Stat value="FREE" label="Tier Available" delay={60} />
      </div>
    </AbsoluteFill>
  );
};
