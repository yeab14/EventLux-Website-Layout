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
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-10 backdrop-blur-md"></div>

      {/* Main Content with Smooth Text Fade-in */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className="text-5xl font-extrabold italic leading-tight mb-4 text-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Creating Moments, Crafting Memories
        </motion.h1>

        <motion.p
          className="text-2xl mb-8 italic text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Bringing your dreams to life with elegance and style.
        </motion.p>

        <div className="mt-8 space-x-4">
          {/* Reserve Your Event Button */}
          <motion.button
            className="bg-green-600 px-6 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 hover:bg-green-700"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(34,197,94, 1)" }}
          >
            Reserve Your Event
          </motion.button>

          {/* Explore More Button */}
          <motion.button
            className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:scale-110 hover:bg-gray-100"
            whileHover={{ scale: 1.1, border: "2px solid rgba(34,197,94, 1)" }}
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
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? "bg-green-600" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
