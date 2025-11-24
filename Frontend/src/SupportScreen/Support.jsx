import { useState } from "react";
import SupportPage from "../assets/Images/bg-support.png";
import "./Support.css";

export default function Support() {
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setStatus("Sending...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/nexaweb/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message Sent Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          projectType: "",
          budget: "",
          message: "",
        });
        setValidated(false);
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error. Try again later.");
    }
  };

  return (
    <div className="support-container container py-5">
      <div className="row align-items-center">
        <h2 className="text-center fw-bold mb-2" style={{color:"#6c3bdf"}}>Contact Support</h2>
        <p className="text-center mb-5">
          Need help or want to start a project? Fill out the form and our team
          will contact you.
        </p>

        {/* Left Form */}
        <div className="col-md-6 upper">
          <form
            className={`row g-3 needs-validation support-form p-4 rounded shadow-sm ${
              validated ? "was-validated" : ""
            }`}
            noValidate
            onSubmit={handleSubmit}
          >
            {/* Full Name + Phone */}
            <div className="col-md-6">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Please enter your full name.
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone *</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Please enter your phone number.
              </div>
            </div>

            {/* Email + Subject */}
            <div className="col-md-6">
              <label className="form-label">Email *</label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Please enter a valid email.
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Subject *</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
              <div className="invalid-feedback">Please enter a subject.</div>
            </div>

            {/* Project Type + Budget */}
            <div className="col-md-6">
              <label className="form-label">Project Type *</label>
              <select
                className="form-select"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="Website Development">Website Development</option>
                <option value="E-Commerce Store">E-Commerce Store</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Branding / Logo Design">
                  Branding / Logo Design
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>
              <div className="invalid-feedback">
                Please select a project type.
              </div>
            </div>

            <div className="col-md-6">
              <label className="form-label">Budget (₹) *</label>
              <input
                type="number"
                className="form-control"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                placeholder="Example: 15000"
              />
              <div className="invalid-feedback">Please enter a budget.</div>
            </div>

            {/* Full width message */}
            <div className="col-12">
              <label className="form-label">Message *</label>
              <textarea
                className="form-control"
                rows="3"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="invalid-feedback">Please enter a message.</div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary w-100" type="submit" style={{backgroundColor:"#6c3bdf",border:"none"}}>
                Send Message
              </button>
            </div>

            {status && <p className="mt-3 text-center fw-bold">{status}</p>}
          </form>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center upper">
          <img
            src={SupportPage}
            alt="Office"
            className="support-image img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
