import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import React from "react";

interface SlideLayoutProps {
  children: React.ReactNode;
  badge?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, badge }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)",
        fontFamily: "'Inter', sans-serif",
        padding: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      {badge && (
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0, 229, 255, 0.2), rgba(124, 58, 237, 0.2))",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            padding: "8px 20px",
            borderRadius: 20,
            fontSize: 16,
            fontWeight: 500,
            color: "#00E5FF",
            marginBottom: 20,
          }}
        >
          {badge}
        </div>
      )}
      {children}
    </AbsoluteFill>
  );
};

export const Title: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const y = interpolate(frame, [delay, delay + 20], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <h1
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 64,
        fontWeight: 700,
        textAlign: "center",
        margin: 0,
        opacity,
        transform: `translateY(${y}px)`,
      }}
    >
      {children}
    </h1>
  );
};

export const Subtitle: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 10,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <p
      style={{
        fontSize: 28,
        color: "#94A3B8",
        textAlign: "center",
        marginTop: 20,
        opacity,
      }}
    >
      {children}
    </p>
  );
};

export const Accent: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = "#00E5FF",
}) => <span style={{ color }}>{children}</span>;

export const Card: React.FC<{
  children: React.ReactNode;
  delay?: number;
  highlight?: boolean;
  highlightColor?: string;
}> = ({ children, delay = 0, highlight = false, highlightColor = "#00E5FF" }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const scale = interpolate(frame, [delay, delay + 15], [0.9, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        background: highlight
          ? `linear-gradient(135deg, ${highlightColor}22, ${highlightColor}11)`
          : "rgba(255, 255, 255, 0.03)",
        border: `1px solid ${highlight ? highlightColor : "rgba(255, 255, 255, 0.1)"}`,
        borderRadius: 16,
        padding: 24,
        opacity,
        transform: `scale(${scale})`,
        boxShadow: highlight ? `0 0 30px ${highlightColor}33` : "none",
      }}
    >
      {children}
    </div>
  );
};

export const CardIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ fontSize: 40, marginBottom: 12 }}>{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color,
}) => (
  <h3
    style={{
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 24,
      fontWeight: 600,
      margin: 0,
      marginBottom: 8,
      color: color || "#F8FAFC",
    }}
  >
    {children}
  </h3>
);

export const CardText: React.FC<{ children: React.ReactNode; small?: boolean }> = ({
  children,
  small,
}) => (
  <p
    style={{
      fontSize: small ? 14 : 16,
      color: "#94A3B8",
      margin: 0,
      lineHeight: 1.5,
    }}
  >
    {children}
  </p>
);

export const Grid: React.FC<{
  children: React.ReactNode;
  columns?: number;
  gap?: number;
}> = ({ children, columns = 3, gap = 20 }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap,
      width: "100%",
      maxWidth: 1100,
      marginTop: 40,
    }}
  >
    {children}
  </div>
);

export const Stat: React.FC<{
  value: string;
  label: string;
  delay?: number;
}> = ({ value, label, delay = 0 }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const scale = interpolate(frame, [delay, delay + 20], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div style={{ textAlign: "center", opacity, transform: `scale(${scale})` }}>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 56,
          fontWeight: 700,
          background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 8 }}>{label}</div>
    </div>
  );
};
