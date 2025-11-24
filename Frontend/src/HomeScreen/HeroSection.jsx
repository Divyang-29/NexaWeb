import "./HeroSection.css";
import DarkVeil from "./DarkVeil/DarkVeil";
import TextType from "./TextType/TextType";

export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      {/* 🔥 Background Shader */}
      <DarkVeil />

      {/* 🔥 Hero Content */}
      <div className="container hero-content">
        <div className="row mt-5">
          <div className="hero-heading text-center">
             <h1><TextType
              text={[
                "Where AI dominates, we deliver human-crafted development.",
              ]}
              typingSpeed={75}
              pauseDuration={1900}
              showCursor={true}
              cursorCharacter="|"
            />
        </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
