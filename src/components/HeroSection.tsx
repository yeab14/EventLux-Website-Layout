import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Animation library for React

const HeroSection: React.FC = () => {

  const images = [
    "/src/assets/decor1.avif",
    "/src/assets/decor2.jpg",
    "/src/assets/decor3.avif",
    "/src/assets/decor4.jpg",
    "/src/assets/gala1.avif",
    "/src/assets/gala2.avif",
    "/src/assets/gala3.jpg",
    "/src/assets/vipguests1.jpg",
    "/src/assets/vipguests2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      
      {/* Parallax Effect with Smooth Zoom Transition */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundPosition: "center",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Background Blur & Gradient Overlay to Enhance Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 backdrop-blur-lg"></div>

      {/* Main Content with Smooth Text Animation */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Creating Moments, Crafting Memories
        </motion.h1>

        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Bringing your dreams to life with elegance and style.
        </motion.p>

        <div className="mt-8 space-x-4">
          {/* Reserve Your Event Button */}
          <motion.button
            className="bg-green-600 px-6 py-3 rounded hover:bg-green-700 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Reserve Your Event
          </motion.button>

          {/* Explore More Button */}
          <motion.button
            className="bg-white text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>

      {/* Slideshow Navigation Dots with Animated Hover Effect */}
      <div className="absolute bottom-8 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-green-600" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.5, rotate: 360 }}
          />
        ))}
      </div>

      {/* Decorative SVG Wave with Motion */}
      <div className="absolute bottom-0 w-full">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-32"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
        >
          <path
            fill="#1f2937"
            fillOpacity="1"
            d="M0,288L1440,64L1440,320L0,320Z"
          ></path>
        </motion.svg>
      </div>

    </section>
  );
};

export default HeroSection;
