import office from "../assets/Images/office-work-28.png"
import "./HeroSection.css";
export default function HeroSection(){
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-6 hero-heading">
                    <h1>Where AI dominates, we deliver human-crafted development.</h1>
                </div>
                <div className="col-6">
                    <img src={office} alt="hero Section image" className="hero-image"/>
                </div>
            </div>
        </div>
    )
}