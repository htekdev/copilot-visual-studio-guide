import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Title, Subtitle, Accent } from "../components/SlideLayout";

export const QuestionsSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const resources = [
    {
      title: "📚 Official Docs",
      links: [
        { label: "learn.microsoft.com/visualstudio/ide/copilot-agent-mode", url: "#" },
        { label: "github.blog/changelog", url: "#" },
        { label: "devblogs.microsoft.com/visualstudio", url: "#" },
      ],
    },
    {
      title: "🎬 Deep Dive Guide",
      links: [
        { label: "htek.dev/articles/github-copilot-visual-studio-guide", url: "#" },
      ],
      note: "Every feature, every shortcut, every pattern — with a full video walkthrough.",
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
      <Title>Resources & Questions</Title>

      <div
        style={{
          display: "flex",
          gap: 40,
          marginTop: 50,
          maxWidth: 1000,
        }}
      >
        {resources.map((resource, i) => (
          <div
            key={resource.title}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 16,
              padding: 32,
              flex: 1,
              opacity: interpolate(frame, [15 + i * 15, 35 + i * 15], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              }),
            }}
          >
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 26,
                fontWeight: 600,
                color: "#F8FAFC",
                margin: 0,
                marginBottom: 20,
              }}
            >
              {resource.title}
            </h3>
            {resource.links.map((link) => (
              <p
                key={link.label}
                style={{
                  fontSize: 16,
                  color: "#00E5FF",
                  margin: 0,
                  marginBottom: 12,
                }}
              >
                {link.label}
              </p>
            ))}
            {resource.note && (
              <p style={{ fontSize: 15, color: "#94A3B8", margin: 0, marginTop: 16, lineHeight: 1.5 }}>
                {resource.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Questions */}
      <div
        style={{
          marginTop: 60,
          textAlign: "center",
          opacity: interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 56,
            fontWeight: 700,
            margin: 0,
            marginBottom: 20,
          }}
        >
          Questions?
        </h2>
        <p style={{ fontSize: 24, color: "#94A3B8" }}>
          Let's discuss what would help your team most
        </p>
      </div>

      {/* Contact */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          gap: 40,
          opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <span style={{ fontSize: 18, color: "#64748B" }}>
          @htekdev
        </span>
        <span style={{ fontSize: 18, color: "#64748B" }}>
          htek.dev
        </span>
      </div>
    </AbsoluteFill>
  );
};
