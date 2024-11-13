const AboutUsSection: React.FC = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg mb-6">
            EventLux is a premier event planning company with a passion for creating unforgettable experiences.
            Founded on the principles of excellence, creativity, and client-centric service, we bring your vision
            to life with elegance and precision.
          </p>
          <div className="flex justify-center mb-8">
            <img
              src="/path/to/team-photo.jpg"
              alt="EventLux Team"
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <ul className="text-lg list-disc pl-6">
              <li>Attention to Detail</li>
              <li>Unmatched Service</li>
              <li>Endless Creativity</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;
  