import React from "react";
import leftCardImg from "../assets/images/interior1.jpg"
import rightCardImg from "../assets/images/interior2.jpg"
import Abouttilt from "../components/Abouttilt";
import MissionVision from "../components/MissionVission";
import Philosophy from "../components/Philosophy";
import Stats from "../components/Stats";
import Expertise from "../components/Expertise";
import Team from "../components/Team";


const AboutUs = () => {
  return (
    <div className="about-us-page overflow-hidden text-white">

      {/* ========== INTRO SECTION ========== */}
      <div>
         <Abouttilt leftImage={leftCardImg} rightImage={rightCardImg} />
      </div>


      {/* ========== VISION & MISSION ========== */}
      <div>
         <MissionVision/>
      </div>

      

      {/* ========== PHILOSOPHY ========== */}
      <div>
          <Philosophy/>
      </div>



      {/* ========== OUR EXPERTISE ========== */}
      <div>
        <Expertise/>
      </div>




      {/* stats section */}
      <div>
         <Stats/>
      </div>



      {/* ========== TEAM ========== */}
      <div>
          <Team/>
      </div>

    </div>
  );
};

export default AboutUs;
