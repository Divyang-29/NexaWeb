import "./Product.css";
import project1 from "../assets/Images/coding-1-47.png"
import project2 from "../assets/Images/coding-1-47.png"
import project3 from "../assets/Images/coding-1-47.png"

import product1 from "../assets/Images/coding-1-47.png"
import product2  from "../assets/Images/coding-1-47.png"
import product3  from "../assets/Images/coding-1-47.png"
export default function Product() {
  return (
    <div className="container py-5 product-page">

      {/* ===== Page Header ===== */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Work & Products</h2>
        <p className="text-muted">
          Explore our past projects and Nexaweb’s ready-to-use digital solutions.
        </p>
      </div>

      {/* ===== Portfolio Section ===== */}
      <h4 className="section-title">🚀 Recent Projects</h4>
      <div className="row g-4 mt-1 mb-5">
        {[
          { img: project1, title: "E-commerce Store", link: "#" },
          { img: project2, title: "Business Website", link: "#" },
          { img: project3, title: "Portfolio Website", link: "#" },
        ].map((item, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <div className="card product-card h-100">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <a href={item.link} className="btn btn-outline-primary btn-sm">
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Digital Products Section ===== */}
      <h4 className="section-title">🛍 Nexaweb Digital Products</h4>
      <div className="row g-4 mt-1">
        {[
          { img: product1, title: "Business Website Template", price: "₹2,499" },
          { img: product2, title: "E-Commerce UI Kit", price: "₹3,999" },
          { img: product3, title: "Brand Logo Pack", price: "₹999" },
        ].map((item, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <div className="card product-card h-100">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="product-price">{item.price}</p>
                <button className="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
