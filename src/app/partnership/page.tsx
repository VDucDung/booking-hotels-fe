import { Banner } from "./banner";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

export default function ParthnershipPage(){
  return (
    <>
    <Banner/>
    <Section1/>
    <div className="bg-[#f9f9f9] w-full">
    <Section2/>
    </div>
    <Section3/>
    <div className="bg-[#f9f9f9] w-full"> 
    <Section4/>
    </div>
    </>
  )
}
