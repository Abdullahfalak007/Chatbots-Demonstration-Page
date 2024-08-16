import React from "react";
import imagesPath from "../data/imagesPath.json";

const features = [
  "Comprehensive Project Insights",
  "Real-time Status Updates",
  "Expert Support at Your Fingertips",
];

const Side = () => {
  return (
    <div
      className="hidden md:flex flex-col items-center justify-start p-8"
      style={{
        backgroundImage: `url(${imagesPath.Signup.sidebarBackground})`,
        width: "55%",
        backgroundSize: "cover",
      }}
    >
      <img
        src={imagesPath.Signup.logo}
        alt="Logo"
        className="mr-80 mt-16 mb-8 w-[11.5625rem] h-[4.5rem]"
      />
      <img
        src={imagesPath.Signup.robotIcon}
        alt="Robot Interacting with Computer"
        className="mr-28 mt-8 w-[25.18019rem] h-[22.9375rem]"
      />
      <div className="mt-2">
        {features.map((feature, index) => (
          <div className="flex items-center mb-4 mr-32" key={index}>
            <img
              src={imagesPath.Signup.checkmark}
              alt="Checkmark"
              className="h-6 w-6 mr-2"
            />
            <span className="text-white text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Side;
