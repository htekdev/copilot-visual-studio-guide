import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Title, Subtitle, Accent, Card, CardIcon, CardTitle, CardText, Grid } from "../components/SlideLayout";

export const VSFeaturesSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const features = [
    {
      icon: "⚡",
      title: "Inline Completions",
      desc: "Ghost text suggestions as you type — from single tokens to entire methods. Accept with Tab.",
    },
    {
      icon: "🔮",
      title: "Next Edit Suggestions",
      desc: "Predicts your next edit location. Rename cascades, pattern fixes — Tab through changes.",
    },
    {
      icon: "💬",
      title: "Copilot Chat",
      desc: "Ask questions, explain code, generate tests. Slash commands (/explain, /fix, /tests).",
    },
    {
      icon: "🤖",
      title: "Agent Mode",
      desc: "Autonomous coding partner. Multi-file edits, terminal commands, error self-correction.",
    },
    {
      icon: "🔌",
      title: "MCP Servers",
      desc: "Connect external tools: GitHub, Azure DevOps, databases, Playwright.",
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
        GitHub Copilot in <Accent>Visual Studio</Accent>
      </Title>
      <Subtitle>Five integrated systems working together</Subtitle>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
          marginTop: 50,
          maxWidth: 1100,
        }}
      >
        {features.map((feature, i) => (
          <div
            key={feature.title}
            style={{
              width: i < 3 ? "calc(33.33% - 16px)" : "calc(50% - 12px)",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 16,
              padding: 28,
              opacity: interpolate(frame, [15 + i * 12, 30 + i * 12], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }),
              transform: `translateY(${interpolate(frame, [15 + i * 12, 30 + i * 12], [20, 0], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              })}px)`,
            }}
          >
            <div style={{ fontSize: 44, marginBottom: 16 }}>{feature.icon}</div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 24,
                fontWeight: 600,
                color: "#F8FAFC",
                margin: 0,
                marginBottom: 12,
              }}
            >
              {feature.title}
            </h3>
            <p style={{ fontSize: 16, color: "#94A3B8", margin: 0, lineHeight: 1.5 }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
