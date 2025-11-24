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
            Nexaweb is a new-age web solutions startup in India, offering customized,
            ROI-driven websites and e-commerce platforms at startup-friendly pricing.
            We combine clean UI, powerful functionality, and creative graphics to
            help brands launch and scale online.
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="row g-4">

        {/* Standard Plan */}
        <div className="col-md-4">
          <div className="card pricing-card h-100">
            <div className="card-body text-center">
              <h5 className="card-title" style={{color:"#6c3bdf"}}>⭐ Standard Plan</h5>
              <h6 className="card-price">₹9,999 - ₹14,999</h6>
              <p className="card-text">Perfect for startups & small businesses.</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔ Up to 5 Pages</li>
                <li>✔ Responsive Design</li>
                <li>✔ Contact/Inquiry Form</li>
                <li>✔ Social Media Integration</li>
                <li>✔ Basic On-page SEO</li>
                <li>✔ 1 Month Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="col-md-4">
          <div className="card pricing-card h-100 featured-card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{color:"#6c3bdf"}}>🚀 Premium Plan</h5>
              <h6 className="card-price">₹19,999 - ₹39,999</h6>
              <p className="card-text">Great for growing businesses & service providers.</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔ Everything in Standard</li>
                <li>✔ Up to 10 Custom Pages</li>
                <li>✔ WhatsApp / Chat Widget</li>
                <li>✔ Blog Module</li>
                <li>✔ Speed + Advanced SEO</li>
                <li>✔ 2 Months Support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Plan */}
        <div className="col-md-4">
          <div className="card pricing-card h-100">
            <div className="card-body text-center">
              <h5 className="card-title" style={{color:"#6c3bdf"}}>💎 Custom Plan</h5>
              <h6 className="card-price">Custom Quote</h6>
              <p className="card-text">Tailored for your unique business needs.</p>
              <ul className="list-unstyled text-start ps-3">
                <li>✔ eCommerce / Booking Systems</li>
                <li>✔ Admin Dashboard</li>
                <li>✔ API & CRM Integrations</li>
                <li>✔ Custom Animations</li>
                <li>✔ Priority Support</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
