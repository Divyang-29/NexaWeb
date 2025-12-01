import "./Service.css";
import SpotlightCard from "./SpotlightCard/SpotlightCard";

import web from "../assets/Images/webDesign.png";
import Support from "../assets/Images/bg-support.webp";
import webDev from "../assets/Images/webDev.png";
import responsive from "../assets/Images/responsive.png";
import Content from "../assets/Images/Content.png";
import ServiceLogo from "../assets/Images/Service-logo.png";

export default function Service() {
  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="row">
        <div className="col text-center">
          <h3 className="fw-bold" style={{ color: "#6c3bdf" }}>
            Our Services
          </h3>
          <p className="service-paragraph">
            Nexaweb delivers everything you need to build a powerful online
            presence. From clean UI design to dynamic web development, we create
            responsive, fast, and affordable websites customized for your goals.
            Get the perfect plan to build a digital experience that stands out.
          </p>
        </div>
      </div>

      {/* Spotlight Service Cards */}
      <div className="row g-4 mt-4">
        {[
          { img: web, title: "Web Design" },
          {
            img: Support,
            title: "24/7 Free Support",
            desc: "(Phone / Chat / Email)",
          },
          { img: webDev, title: "Web Development" },
          { img: responsive, title: "100% Responsive Website" },
          { img: Content, title: "Content Writing" },
          { img: ServiceLogo, title: "Logo Designs" },
        ].map((service, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
            key={index}
          >
            <SpotlightCard
              spotlightColor="rgba(160, 78, 255, 0.35)"
              className="
                w-100
                h-[320px]
                rounded-3xl 
                shadow-lg 
                flex flex-col 
                items-center 
                justify-center 
                text-center
                p-6
                spotlight-custom-bg
              "
            >
              <img
                src={service.img}
                alt={service.title}
                className="max-w-[180px] max-h-[200px] object-contain mb-4"

              />

              <h4 className="font-semibold text-[#C9B8D9] text-lg">
                {service.title}
              </h4>

              {service.desc && (
                <p className="text-sm text-[#C9B8D9]/70 mt-1">{service.desc}</p>
              )}
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
}
