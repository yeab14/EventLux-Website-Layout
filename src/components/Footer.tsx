import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Animation library for React

const HeroSection: React.FC = () => {
  const images = [
    "/src/assets/decor2.jpg",
    "/src/assets/decor4.jpg",
    "/src/assets/gala4.jpg",
    "/src/assets/gala3.jpg",
    "/src/assets/vipguests3.jpg",
    "/src/assets/vipguests2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Sliding Transition Effect */}
      <AnimatePresence>
        <motion.div
          key={images[currentImageIndex]}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            filter: "brightness(50%)", // Darken the image for better text contrast
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Background Gradient Overlay with Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 backdrop-blur-lg"></div>

      {/* Main Content with Smooth Text Fade-in */}
      <motion.div
        className="z-10 px-6 sm:px-12 md:px-24 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4 text-shadow-xl text-gradient"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Creating Moments, Crafting Memories
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl mb-8 italic text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Bringing your dreams to life with elegance and style.
        </motion.p>

        {/* Call to Action Buttons */}
        <div className="mt-8 space-x-4">
          <motion.button
            className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 px-8 py-4 rounded-lg shadow-2xl text-white text-lg hover:scale-110 transition-all transform hover:bg-gradient-to-l"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 25px rgba(34,197,94,0.6)",
            }}
          >
            Reserve Your Event
          </motion.button>

          <motion.button
            className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 px-8 py-4 rounded-lg shadow-xl text-gray-800 text-lg hover:scale-110 transition-all transform hover:bg-gradient-to-l"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 25px rgba(0,0,0,0.3)",
            }}
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>

      {/* Slideshow Navigation Dots */}
      <div className="absolute bottom-8 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-6 h-6 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-green-600" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
