import "./index.css";
import { Composition, Sequence } from "remotion";
import { TitleSlide } from "./slides/TitleSlide";
import { AgenticEvolutionSlide } from "./slides/AgenticEvolutionSlide";
import { EcosystemSlide } from "./slides/EcosystemSlide";
import { IDEsSlide } from "./slides/IDEsSlide";
import { VSFeaturesSlide } from "./slides/VSFeaturesSlide";
import { DemoSlide } from "./slides/DemoSlide";
import { QuestionsSlide } from "./slides/QuestionsSlide";

// Each slide duration in frames (at 30fps)
const SLIDE_DURATION = 150; // 5 seconds per slide

export const CopilotPresentation: React.FC = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={SLIDE_DURATION}>
        <TitleSlide />
      </Sequence>
      <Sequence from={SLIDE_DURATION} durationInFrames={SLIDE_DURATION}>
        <AgenticEvolutionSlide />
      </Sequence>
      <Sequence from={SLIDE_DURATION * 2} durationInFrames={SLIDE_DURATION}>
        <EcosystemSlide />
      </Sequence>
      <Sequence from={SLIDE_DURATION * 3} durationInFrames={SLIDE_DURATION}>
        <IDEsSlide />
      </Sequence>
      <Sequence from={SLIDE_DURATION * 4} durationInFrames={SLIDE_DURATION}>
        <VSFeaturesSlide />
      </Sequence>
      <Sequence from={SLIDE_DURATION * 5} durationInFrames={SLIDE_DURATION}>
        <DemoSlide />
      </Sequence>
      <Sequence from={SLIDE_DURATION * 6} durationInFrames={SLIDE_DURATION}>
        <QuestionsSlide />
      </Sequence>
    </>
  );
};

export const RemotionRoot: React.FC = () => {
  const totalDuration = SLIDE_DURATION * 7; // 7 slides

  return (
    <>
      <Composition
        id="CopilotIntro"
        component={CopilotPresentation}
        durationInFrames={totalDuration}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
