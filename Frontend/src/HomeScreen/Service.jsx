import "./Service.css";
import web from "../assets/Images/webDesign.jpg";
import Support from "../assets/Images/Support.jpg";
import webDev from "../assets/Images/webDev.jpg";
import responsive from "../assets/Images/responsive.jpg";
import Content from "../assets/Images/Content.jpg";
import ServiceLogo from "../assets/Images/Service-logo.jpg";

export default function Service() {
  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="row">
        <div className="col text-center">
          <h3 className="fw-bold" style={{color:"#6c3bdf"}}>Our Services</h3>
          <p className="service-paragraph">
            Nexaweb delivers everything you need to build a powerful online
            presence. From clean UI design to dynamic web development, we create
            responsive, fast, and affordable websites customized for your goals.
            Get the perfect plan to build a digital experience that stands out.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="row g-4 mt-4">
        {[
          { img: web, title: "Web Design" },
          { img: Support, title: "24/7 Free Support", desc: "(Phone / Chat / Email)" },
          { img: webDev, title: "Web Development" },
          { img: responsive, title: "100% Responsive Website" },
          { img: Content, title: "Content Writing" },
          { img: ServiceLogo, title: "Logo Designs" }
        ].map((service, index) => (
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center" key={index}>
            <div className="card service-box text-center">
              <div className="card-body">
                <img src={service.img} alt={service.title} className="service-img" />
                <h4 className="mt-3">{service.title}</h4>
                {service.desc && <p className="m-0 text-muted small">{service.desc}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
