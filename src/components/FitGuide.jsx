import React from "react";
import KidsImage from "./../assets/fitSection/Kids.jpg";
import MenImage from "./../assets/fitSection/Men.jpg";
import WomenImage from "./../assets/fitSection/Women.jpg";
import { Link } from "react-router-dom";
import { Slide, Fade } from "react-awesome-reveal";

function FitGuide() {
  const images = {
    Men: MenImage,
    Women: WomenImage,
    Kids: KidsImage,
  };
  const links={
    Men: '/men',
    Women: '/women',
    Kids: '/kids',

  }

  return (
    <div className="container mx-auto mt-14 px-8 py-12 ">
      <h1 className="text-center leading-wide text-3xl mb-12 font-medium text-violet-900 ">
        FIT GUIDE
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {["Men", "Women", "Kids"].map((label) => (
          <Link key={label} className=" relative group" to={links[label]}  >
            <img
              className=" h-full w-full  transform transition-all duration-300 group-hover:scale-105  text-white"
              src={images[label]}
            />
            <div className="bg-black absolute bottom-6 left-1/2 -translate-x-1/2 bg-opacity-50 text-white transform transition-all duration-300 inline-block  group-hover:scale-110 px-10 py-3">
              {label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FitGuide;
