import coding from "../assets/Images/coding-1-47.png";
import "./Define.css";

export default function Define() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={coding}
            alt="Define Section Image"
            className="Define-image"
          />
        </div>
        <div className="col-6 define-text-section">
          <h4>Define us!</h4>
          <h2>
            Welcome to Nexaweb – Your Trusted Partner for Web & App Development
          </h2>
          <p>
            Nexaweb is a dedicated freelance web development and app development
            service provider in India. We focus on delivering modern,
            high-performance digital solutions that help businesses grow online.
            With a strong commitment to quality and reliability, we build
            responsive websites, custom web applications, and user-friendly
            mobile apps tailored to your goals.
          </p>
          <p>
            Our work is designed to bring real value. From sleek business
            websites to feature-rich platforms, we ensure every project looks
            great, functions smoothly, and supports measurable results. Nexaweb
            blends creativity with clean development to help you establish a
            strong and professional digital presence.
          </p>
        </div>
      </div>
    </div>
  );
}
