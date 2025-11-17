import Support from "../SupportScreen/Support";
import Define from "./Define";
import HeroSection from "./HeroSection";
import "./Home.css"
import Pricing from "./Pricing";
import Service from "./Service";
import WhyUs from "./WhyUs";
export default function Home(){
    return(
        <>
        <HeroSection/>
        <Define/>
        <Service/>
        <Pricing/>
        <WhyUs/>
        <Support/>
        </>
    )
}