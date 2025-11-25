import coding from "../assets/Images/coding-1-47.png";
import "./Define.css";

export default function Define() {
  return (
    <div className="container define-container">
      <div className="row give-margin align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-6 col-12 text-center mb-4">
          <img
            src={coding}
            alt="Define Section Image"
            className="Define-image img-fluid"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-6 col-12 define-text-section">
          <h4 style={{ color: "#6c3bdf" }}>Define us!</h4>
          <h2>
            Welcome to Nexaweb – Your Trusted Partner for Web & App Development
          </h2>
          <p>
            Nexaweb is a dedicated freelance web development and app development
            service provider in India. We focus on delivering modern,
            high-performance digital solutions that help businesses grow online.
          </p>
          <p>
            Our work is designed to bring real value. From sleek business
            websites to feature-rich platforms, we ensure every project looks
            great, functions smoothly, and supports measurable results.
          </p>
        </div>
      </div>
    </div>
  );
}
