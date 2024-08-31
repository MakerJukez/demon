import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './bg1.png';
import TG from "./TG.png";
import { cn } from "./lib/utils";
import { AnimatedList } from './animated-list';
import Marquee from "react-fast-marquee"; 

let notifications = [
  {
    name: "Kook",
    description: "let's run this shit",
    time: "15m ago",
    icon: "kook.jpg",
    color: "#00C9A7",
  },
  {
    name: "Sahil",
    description: "just put the tweet out when I send CA",
    time: "12m ago",
    icon: "sahil.png",
    color: "#00C9A7",
  },
  {
    name: "6ix9ine",
    description: "FUCKING HYPE N***A",
    time: "10m ago",
    icon: "69.jpg",
    color: "#00C9A7",
  },
  {
    name: "Wolf",
    description: "just wait till I start shilling...",
    time: "10m ago",
    icon: "wolf.jpg",
    color: "#00C9A7",
  },
];

notifications = Array.from({ length: 1 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-12 items-center justify-center rounded-2xl overflow-hidden"
          style={{
            backgroundColor: color,
          }}
        >
          <img src={icon} alt="Icon" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function App() {
  const [showButton, setShowButton] = useState(true);
  const [showGun, setShowGun] = useState(false); // New state for gun visibility
  const [currentImage, setCurrentImage] = useState("dem1.png");
  const videoRef = useRef(null);

  const handleButtonClick = () => {
    setShowButton(false);
    setShowGun(true); // Show gun when button is clicked
    setCurrentImage("dem2.png");
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#FF0707] overflow-clip relative">
      {showButton && (
        <motion.button
          className="absolute z-30 px-8 py-4 bg-black text-[#FF0707] font-bold text-3xl"
          onClick={handleButtonClick}
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ACTIVATE
        </motion.button>
      )}
      
      <div className='absolute top-5 left-5 right-5 z-20'>
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>

      <div className="absolute top-5 font-semibold text-xs md:text-base">CA: XXXXXXXXXXXXXXXX</div>
      
      <div className='absolute bottom-5 left-5 flex justify-center items-center z-10'>
          <a href="https://x.com/" className=''>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#00000" viewBox="0 0 50 50">
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </a>
          <a href="https://t.me/" className=''>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#00000" viewBox="0 0 50 50">
              <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
            </svg>
          </a>
      </div>

      <div className=''>
        <Marquee>
          {/* Add content for Marquee if needed */}
        </Marquee>
      </div>

      <img src={currentImage} className="absolute bottom-0 md:right-[2%] w-[70%] md:w-[35%] z-20" alt="Demon" />

      {showGun && (
        <motion.img
          src="gun.png"
          className='absolute bottom-0 right-[5%] md:-right-[5%] rotate-[60deg] transform -scale-x-100 w-[100%] md:w-[75%] z-10'
        />
      )}
      
      <video
        ref={videoRef}
        src="demon.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ display: showButton ? 'none' : 'block' }}
        loop
        muted={false}
        playsInline
        webkit-playsinline="true"
        preload="auto"
      />
    </div>
  );
}

export default App;