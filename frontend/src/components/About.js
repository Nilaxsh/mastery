// import React from "react";
// import AboutBackground from "../Assets/about-background.png";
// import AboutBackgroundImage from "../Assets/nine.png";
// import { BsFillPlayCircleFill } from "react-icons/bs";



// const About = () => {
//   return (
//     <div className="about-section-container">
//       <div className="about-background-image-container">
//         <img src={AboutBackground} alt="" />
//       </div>
//       <div className="about-section-image-container">
//         <img src={AboutBackgroundImage} alt="" />
//       </div>
//       <div className="about-section-text-container">
//         <p className="primary-subheading">About</p>
//         <h1 className="primary-heading">
//         What is Mastery
//         </h1>
//         <p className="primary-text">
//         Mastery is an online learning platform where students can access the driver handbook and obtain model papers for practice from the comfort of their homes through the Learners Access feature
//         </p>
//         <p className="primary-text">
//         you can make the first 3 attempts  free then if you wish to make 4th attempt you must pay for it 
//         </p>
//         {/* np */}
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/zebra-crossing-road-composition_1284-17917-removebg-preview.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="About Background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="About Section Image" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          What is Mastery
        </h1>
        <p className="primary-text">
        Welcome to Mastery, your premier online destination for mastering the intricacies of the road. Revel in complimentary access to the driver handbook and model papers for your initial three attempts. For subsequent attempts, a nominal fee is applicable. Embark on your learning journey with Mastery, where the intersection of excellence and convenience awaits you, all from the comfort of your home.
        </p>
        {/* <p className="primary-text">
          You can make the first 3 attempts free. If you wish to make a 4th attempt, you must pay for it.
        </p> */}
        {/* Additional content can be added as needed */}
      </div>
    </div>
  );
};

export default About;

