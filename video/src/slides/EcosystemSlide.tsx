import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import {
  SlideLayout,
  Title,
  Subtitle,
  Accent,
  Card,
  CardIcon,
  CardTitle,
  CardText,
  Grid,
} from "../components/SlideLayout";

export const EcosystemSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const ecosystemItems = [
    {
      icon: "🤖",
      title: "GitHub Coding Agent",
      color: "#7C3AED",
      desc: "Fully autonomous — assign issues directly to Copilot. It plans, codes, tests, and opens PRs.",
      badge: "NEW: Works on GitHub Issues",
      badgeColor: "#7C3AED",
    },
    {
      icon: "⌨️",
      title: "GitHub Copilot CLI",
      color: "#00E5FF",
      desc: "Terminal-native agent — agentic coding from your command line. Multi-file edits, full project context.",
      badge: "🔥 TRENDING: Power user favorite",
      badgeColor: "#00E5FF",
    },
    {
      icon: "💻",
      title: "Copilot in IDEs",
      color: "#10B981",
      desc: "Embedded experience — completions, chat, agent mode, code review — inside your favorite editor.",
      badge: "6+ IDEs: VS, VS Code, JetBrains...",
      badgeColor: "#10B981",
    },
  ];

  const additionalPlatforms = [
    { name: "GitHub.com", desc: "PR reviews, issue comments" },
    { name: "GitHub Mobile", desc: "Code on the go" },
    { name: "Copilot Extensions", desc: "3rd party integrations" },
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
        The GitHub Copilot <Accent>Ecosystem</Accent>
      </Title>
      <Subtitle>More than just IDE autocomplete — a complete AI-powered development platform</Subtitle>

      <Grid columns={3} gap={30}>
        {ecosystemItems.map((item, i) => (
          <div
            key={item.title}
            style={{
              background: `linear-gradient(135deg, ${item.color}22, ${item.color}11)`,
              border: `1px solid ${item.color}`,
              borderRadius: 16,
              padding: 28,
              opacity: interpolate(frame, [20 + i * 15, 35 + i * 15], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }),
              transform: `scale(${interpolate(frame, [20 + i * 15, 35 + i * 15], [0.9, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              })})`,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>{item.icon}</div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 26,
                fontWeight: 600,
                color: item.color,
                margin: 0,
                marginBottom: 12,
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: 16, color: "#94A3B8", margin: 0, lineHeight: 1.5 }}>
              {item.desc}
            </p>
            <div
              style={{
                marginTop: 16,
                padding: "8px 12px",
                background: `${item.badgeColor}33`,
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                color: item.badgeColor,
              }}
            >
              {item.badge}
            </div>
          </div>
        ))}
      </Grid>

      {/* Additional platforms */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 40,
          opacity: interpolate(frame, [70, 85], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        {additionalPlatforms.map((platform) => (
          <div
            key={platform.name}
            style={{
              padding: "12px 24px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 8,
              fontSize: 15,
            }}
          >
            <strong style={{ color: "#F8FAFC" }}>{platform.name}</strong>
            <span style={{ color: "#94A3B8" }}> — {platform.desc}</span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
