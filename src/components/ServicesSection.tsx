import {
  FaRegCalendar,
  FaMapMarkerAlt,
  FaConciergeBell,
  FaMusic,
} from "react-icons/fa";

const ServicesSection: React.FC = () => {
  return (
    <section id="servicesSection" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">
          Our Services
        </h2>
        <div className="mt-2 h-1 w-16 bg-green-500 mx-auto rounded-full mb-8"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <FaRegCalendar className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Event Planning</h3>
            <p>From concept to execution, we handle every detail.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <FaMapMarkerAlt className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Venue Selection</h3>
            <p>Discover the perfect venue to host your special day.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <FaConciergeBell className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Catering & Decor</h3>
            <p>
              Custom menus and luxurious decorations tailored to your taste.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <FaMusic className="text-4xl text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">
              Entertainment & Music
            </h3>
            <p>
              Live bands, DJs, and entertainment to keep your guests engaged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
