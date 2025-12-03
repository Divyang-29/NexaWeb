import "./Product.css";
import project1 from "../assets/Images/wanderlust.webp";
import project2 from "../assets/Images/chatgpt.webp";
import project3 from "../assets/Images/zerodha-clone.webp";

import product1 from "../assets/Images/single.webp"; // basic
import product2 from "../assets/Images/double.webp"; // moderate
import product3 from "../assets/Images/single.webp"; // premium

export default function Product() {
  return (
    <div className="container py-5 product-page">
      {/* ===== Page Header ===== */}
      <div className="text-center mb-5 mt-5">
        <h2 className="fw-bold">Our Work & Products</h2>
        <p className="">
          Explore our past projects and Nexaweb’s ready-to-use digital
          solutions.
        </p>
      </div>

      {/* ===== Portfolio Section ===== */}
      <h4 className="section-title">🚀 Recent Projects</h4>
      <div className="row g-4 mt-1 mb-5">
        {[
          {
            img: project1,
            title: "Property Rental Website",
            link: "https://wanderlust-z8j6.onrender.com",
          },
          {
            img: project2,
            title: "Ai model",
            link: "https://chatgpt-clone-1-wr3g.onrender.com/",
          },
          {
            img: project3,
            title: "Trading Platform",
            link: "https://zerodha-clone-frontend-702d.onrender.com/",
          },
        ].map((item, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <div className="card product-card h-100">
              <img
                src={item.img}
                className="card-img-top"
                alt={item.title}
                style={{ height: "280px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: "#6c3bdf" }}>
                  {item.title}
                </h5>
                <a
                  href={item.link}
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Pricing Section (Replaces Digital Products) ===== */}
      <div className="row mb-5">
        <div className="col text-center">
          <h5 style={{ color: "#6c3bdf" }}>
            Web Development and Website Design
          </h5>
          <h4>Plans & Pricing</h4>
          <p style={{ opacity: "1", lineHeight: "1.6" }}>
            Nexaweb offers affordable, startup-friendly website solutions with
            clean UI, fast performance, and modern design — perfect for new and
            growing businesses.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row g-4">
        {/* Basic */}
        <div className="col-md-4">
          <div className="card pricing-card h-100">
            <img
              src={product1}
              className="card-img-top pricing-img"
              alt="Basic Plan"
              style={{ height: "360px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#fff" }}>
                ⭐ Basic Plan
              </h5>
              <h6 className="card-price">₹1,999 – ₹3,499</h6>
              <p className="card-text">
                Perfect for students, freelancers, and new businesses starting
                online.
              </p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔ 1 Page Website</li>
                <li>✔ Mobile Responsive</li>
                <li>✔ Contact/Inquiry Form</li>
                <li>✔ Social Media Integration</li>
                <li>✔ Basic SEO Setup</li>
                <li>✔ 7 Days Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Moderate */}
        <div className="col-md-4">
          <div className="card pricing-card h-100 featured-card">
            <img
              src={product2}
              className="card-img-top pricing-img"
              alt="Moderate Plan"
              style={{ height: "360px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#fff" }}>
                🚀 Moderate Plan
              </h5>
              <h6 className="card-price">₹4,999 – ₹7,999</h6>
              <p className="card-text">
                Ideal for small businesses wanting a clean multi-page website.
              </p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔ Everything in Basic</li>
                <li>✔ Up to 3 Custom Pages</li>
                <li>✔ WhatsApp / Chat Button</li>
                <li>✔ Faster Loading Speed</li>
                <li>✔ Basic On-page SEO</li>
                <li>✔ 15 Days Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Premium */}
        <div className="col-md-4">
          <div className="card pricing-card h-100">
            <img
              src={product3}
              className="card-img-top pricing-img"
              alt="Premium Plan"
              style={{ height: "360px" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#fff" }}>
                💎 Premium Plan
              </h5>
              <h6 className="card-price">₹9,999 – ₹14,999</h6>
              <p className="card-text">
                Best for businesses looking for a complete professional website.
              </p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔ Everything in Moderate</li>
                <li>✔ 7–10 Custom Pages</li>
                <li>✔ Blog Module (Optional)</li>
                <li>✔ Advanced Speed Optimization</li>
                <li>✔ Advanced SEO Setup</li>
                <li>✔ 1 Month Priority Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
