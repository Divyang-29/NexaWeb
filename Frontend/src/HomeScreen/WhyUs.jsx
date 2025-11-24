import "./WhyUs.css";

export default function WhyUs() {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h5 className="text-uppercase" style={{color:"#6c3bdf"}}>Why Choose Us</h5>
          <h3>Why Businesses Trust Nexaweb</h3>
          <p className="w-75 mx-auto">
            Your website shouldn’t just exist — it should work for your
            business. That’s why Nexaweb builds fast, user-focused, and scalable
            web solutions tailored to your goals. From design to performance,
            everything is optimized for growth and conversions.
          </p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card choose-card h-100 text-center p-3">
            <h4>💰 Startup-Friendly Pricing</h4>
            <p>
              High-quality development at prices designed for startups and small
              businesses. Get amazing results without breaking your budget.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card choose-card h-100 text-center p-3">
            <h4>🎨 Fully Custom Websites</h4>
            <p>
              We don’t use generic templates. Every project is built with unique
              design and features tailored to your brand and business goals.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card choose-card h-100 text-center p-3">
            <h4>⚡ Fast Delivery</h4>
            <p>
              Efficient workflows and optimized development help us deliver
              projects on time without compromising on quality and performance.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card choose-card h-100 text-center p-3">
            <h4>📈 Conversion-Focused Design</h4>
            <p>
              Smart UI/UX that helps convert website visitors into leads,
              customers, and long-term brand advocates.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card choose-card h-100 text-center p-3">
            <h4>🛠 Modern Technology Stack</h4>
            <p>
              Built with reliable and scalable technologies to support your
              business growth and evolving digital needs.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card choose-card h-100 text-center p-3">
            <h4>🤝 End-to-End Support</h4>
            <p>
              From planning to launch and beyond, we provide ongoing assistance
              and reliable technical support whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
