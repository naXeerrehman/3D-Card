import React from "react";
// logo
import logoImg from "../img/logo.svg";
// show image
import NikeImg from "../img/nike.png";
// import framer hooks
import { useMotionValue, useTransform, motion } from "framer-motion";

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(x,[-100, 100],[30, -30]);
  const rotateY = useTransform(y,[-100, 100],[-30, 30]);
  const colors = [
    { value: "#b6a179" },
    { value: "#272425" },
    { value: "#6389cb" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];

  return (
    // card wrapper
    <div className="flex lg:justify-center ml-[60px] items-center min-h-[700px] -mt-12">
      {/* card */}
      <motion.div
        style={{ 
          x, y,
           rotateX, rotateY, 
           z: 100 
          }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="relative w-[400px] min-h-[400px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab"
      >
        {/* card logo */}
        <div className="mb-6">
          <img src={logoImg} alt="Logo" />
        </div>
        {/* card title */}
        <h1 className="text-5xl mb-6 font-extrabold">Nike Air Max Pre-Day</h1>
        {/* card subtitle */}
        <p className="max-w-[300px] text-[#000000] mb-6">
          Taking the classic look of heritage Nike Running into new realm, the Nike
          Air Max Pre-Day brings you a fast-paced look that's ready for today's
          world.
        </p>
        {/* button and price wrapper */}
        <div className="flex items-center gap-x-[20px] mb-12">
          <button className="bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg">
            Add to Bag
          </button>
          <div className="text-[24px] font-bold text-[#000000]">$495.00</div>
        </div>
        {/* colours */}
        <ul className="flex gap-x-[10px]">
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className="w-8 h-8 rounded-full cursor-pointer"
              ></li>
            );
          })}
        </ul>
        {/* shoe image*/}
        <motion.div 
          style={{ 
            x, y,
             rotateX, rotateY,
              z: 100000 
            }}
          className="absolute top-[50px] -right-[220px] w-[500px] ">  
        <img src={NikeImg} alt="" draggable="false" />
      </motion.div>
    </motion.div>
  </div>
  );
};

export default Card;
