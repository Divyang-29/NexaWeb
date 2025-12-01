import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="container py-5">

      {/* Heading Section */}
      <div className="row mb-5">
        <div className="col text-center">
          <h5 style={{color:"#6c3bdf"}}>Web Development and Website Design</h5>
          <h4>Plans & Pricing</h4>
          <p style={{ opacity: "1", lineHeight: "1.6" }}>
            Nexaweb offers affordable, startup-friendly website solutions with
            clean UI, fast performance, and modern design — perfect for new and
            growing businesses.
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="row g-4">

        {/* Basic Plan */}
        <div className="col-md-4">
          <div className="card pricing-card h-100">
            <div className="card-body text-center">
              <h5 className="card-title" style={{color:"#fff"}}>⭐ Basic Plan</h5>
              <h6 className="card-price">₹1,999 – ₹3,499</h6>
              <p className="card-text">Perfect for students, freelancers, and new businesses starting online.</p>
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

        {/* Moderate Plan */}
        <div className="col-md-4">
          <div className="card pricing-card h-100 featured-card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{color:"#fff"}}>🚀 Moderate Plan</h5>
              <h6 className="card-price">₹4,999 – ₹7,999</h6>
              <p className="card-text">Ideal for small businesses wanting a clean multi-page website.</p>
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

        {/* Premium Plan */}
        <div className="col-md-4">
          <div className="card pricing-card h-100">
            <div className="card-body text-center">
              <h5 className="card-title" style={{color:"#fff"}}>💎 Premium Plan</h5>
              <h6 className="card-price">₹9,999 – ₹14,999</h6>
              <p className="card-text">Best for businesses looking for a complete professional website.</p>
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
