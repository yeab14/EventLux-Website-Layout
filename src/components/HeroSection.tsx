const HeroSection: React.FC = () => {
    return (
      <section className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
        <h1 className="text-5xl font-bold">Creating Moments, Crafting Memories</h1>
        <p className="text-2xl mt-4">Bringing your dreams to life with elegance and style.</p>
        <div className="mt-8 space-x-4">
          <button className="bg-green-600 px-6 py-3 rounded">Reserve Your Event</button>
          <button className="bg-white text-gray-800 px-6 py-3 rounded">Explore More</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  