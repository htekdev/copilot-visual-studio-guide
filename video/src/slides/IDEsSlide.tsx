import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Title, Subtitle, Accent, Card, CardIcon, CardTitle, Grid } from "../components/SlideLayout";

export const IDEsSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const ides = [
    {
      icon: "🔷",
      name: "VS Code",
      features: "Agent Mode ✓ | Chat ✓ | NES ✓\nCustom Agents ✓ | Extensions ✓",
      note: "Most feature-complete",
      highlight: false,
    },
    {
      icon: "💎",
      name: "Visual Studio",
      features: "Agent Mode ✓ | Chat ✓ | NES ✓\nCode Review ✓ | MCP ✓ | BYOK ✓",
      note: "Today's Focus →",
      highlight: true,
    },
    {
      icon: "🧠",
      name: "JetBrains",
      features: "Agent Mode ✓ | Chat ✓ | NES ✓\nCode Review ✓ | MCP ✓",
      note: "IntelliJ, PyCharm, WebStorm...",
      highlight: false,
    },
    {
      icon: "🍎",
      name: "Xcode",
      features: "Agent Mode ✓ | Chat ✓\nCode Review ✓ | MCP ✓",
      note: "Swift/Objective-C",
      highlight: false,
    },
    {
      icon: "☀️",
      name: "Eclipse",
      features: "Agent Mode ✓ | Chat ✓\nVision ✓ | MCP ✓",
      note: "Java enterprise",
      highlight: false,
    },
    {
      icon: "⌨️",
      name: "Vim / Neovim",
      features: "Code Completion ✓",
      note: "Lightweight integration",
      highlight: false,
    },
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
      }}
    >
      <Title>
        Copilot in <Accent>Every Major IDE</Accent>
      </Title>
      <Subtitle>Same AI, consistent experience — wherever your team works</Subtitle>

      <Grid columns={3} gap={24}>
        {ides.map((ide, i) => (
          <div
            key={ide.name}
            style={{
              background: ide.highlight
                ? "linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(0, 229, 255, 0.05))"
                : "rgba(255, 255, 255, 0.03)",
              border: `1px solid ${ide.highlight ? "#00E5FF" : "rgba(255, 255, 255, 0.1)"}`,
              borderRadius: 16,
              padding: 24,
              boxShadow: ide.highlight ? "0 0 30px rgba(0, 229, 255, 0.3)" : "none",
              opacity: interpolate(frame, [15 + i * 8, 30 + i * 8], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }),
              transform: `scale(${interpolate(frame, [15 + i * 8, 30 + i * 8], [0.9, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              })})`,
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>{ide.icon}</div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: ide.highlight ? "#00E5FF" : "#F8FAFC",
                margin: 0,
                marginBottom: 12,
              }}
            >
              {ide.name}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#94A3B8",
                margin: 0,
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {ide.features}
            </p>
            <p
              style={{
                fontSize: 14,
                color: ide.highlight ? "#00E5FF" : "#64748B",
                margin: 0,
                marginTop: 8,
                fontWeight: ide.highlight ? 600 : 400,
                fontStyle: ide.highlight ? "normal" : "italic",
              }}
            >
              {ide.note}
            </p>
          </div>
        ))}
      </Grid>

      {/* Bottom message */}
      <div
        style={{
          marginTop: 40,
          padding: "16px 32px",
          background: "linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(124, 58, 237, 0.1))",
          borderRadius: 12,
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          opacity: interpolate(frame, [80, 95], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <strong>Visual Studio is just one entry point</strong>
        <span style={{ color: "#94A3B8" }}> — same subscription unlocks the entire ecosystem</span>
      </div>
    </AbsoluteFill>
  );
};
