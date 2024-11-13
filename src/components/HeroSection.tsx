import { useState, useEffect } from "react";

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

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
             style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
 
      <div className="absolute inset-0 bg-black opacity-40"></div>

     
      <div className="z-10">
        <h1 className="text-5xl font-bold leading-tight mb-4">Creating Moments, Crafting Memories</h1>
        <p className="text-2xl mb-8">Bringing your dreams to life with elegance and style.</p>

        <div className="mt-8 space-x-4">
          <button className="bg-green-600 px-6 py-3 rounded hover:bg-green-700 transition-all">Reserve Your Event</button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition-all">Explore More</button>
        </div>
      </div>

    
      <div className="absolute bottom-8 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-green-600' : 'bg-gray-300'} transition-all`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

  