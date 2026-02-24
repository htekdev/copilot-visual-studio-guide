import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import {
  SlideLayout,
  Title,
  Subtitle,
  Accent,
  Card,
  CardTitle,
  Grid,
  Stat,
} from "../components/SlideLayout";

export const AgenticEvolutionSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const timelineItems = [
    { year: "2021-2022", title: "Autocomplete", desc: "Single-line suggestions", color: "#64748B" },
    { year: "2023-2024", title: "Chat Integration", desc: "Conversational AI in IDE", color: "#94A3B8" },
    { year: "2024-2025", title: "Agentic Era", desc: "Multi-file edits, self-correction", color: "#00E5FF" },
    { year: "2025+", title: "Autonomous Agents", desc: "Plan & execute independently", color: "#7C3AED" },
  ];

  const stats = [
    { value: "200+", label: "Changelog updates in 2024-2025", delay: 60 },
    { value: "4/week", label: "Average major releases", delay: 70 },
    { value: "Weekly", label: "New capabilities shipping", delay: 80 },
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
      {/* Badge */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
          border: "1px solid rgba(0, 229, 255, 0.3)",
          padding: "8px 24px",
          borderRadius: 20,
          fontSize: 16,
          fontWeight: 500,
          color: "#00E5FF",
          marginBottom: 20,
          opacity: interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        Industry Shift
      </div>

      <Title>
        The Rise of <Accent>Agentic</Accent> Development
      </Title>
      <Subtitle>We're living through the fastest evolution in developer tooling history</Subtitle>

      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 50,
          width: "100%",
          maxWidth: 1100,
        }}
      >
        {/* Timeline */}
        <Card delay={20}>
          <CardTitle color="#00E5FF">📈 The Trajectory</CardTitle>
          <div style={{ marginTop: 20 }}>
            {timelineItems.map((item, i) => (
              <div
                key={item.year}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: i < timelineItems.length - 1 ? 20 : 0,
                  opacity: interpolate(frame, [30 + i * 10, 40 + i * 10], [0, 1], {
                    extrapolateRight: "clamp",
                    extrapolateLeft: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 50,
                    background: item.color,
                    borderRadius: 2,
                    marginRight: 16,
                  }}
                />
                <div>
                  <div style={{ fontSize: 12, color: item.color, marginBottom: 4 }}>{item.year}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: item.color === "#64748B" || item.color === "#94A3B8" ? "#F8FAFC" : item.color }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: 14, color: "#94A3B8" }}>— {item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Stats */}
        <Card delay={25}>
          <CardTitle color="#7C3AED">🚀 GitHub's Pace</CardTitle>
          <div style={{ marginTop: 30 }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  marginBottom: i < stats.length - 1 ? 30 : 0,
                  opacity: interpolate(frame, [stat.delay, stat.delay + 15], [0, 1], {
                    extrapolateRight: "clamp",
                    extrapolateLeft: "clamp",
                  }),
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 48,
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 16, color: "#94A3B8" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom message */}
      <div
        style={{
          marginTop: 40,
          padding: "16px 32px",
          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(0, 229, 255, 0.1))",
          borderRadius: 12,
          fontSize: 20,
          fontWeight: 600,
          textAlign: "center",
          opacity: interpolate(frame, [90, 105], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        The question isn't <em>if</em> you'll use AI coding tools — it's <em>how effectively</em>
      </div>
    </AbsoluteFill>
  );
};
