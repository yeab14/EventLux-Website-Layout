import { motion } from "framer-motion";
import {
  FaRegCalendar,
  FaMapMarkerAlt,
  FaConciergeBell,
  FaMusic,
} from "react-icons/fa";

const ServicesSection: React.FC = () => {
  return (
    <section id="servicesSection" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto text-center">
       
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-900 tracking-wide hover:text-green-500 transition duration-300"
        >
          Our Services
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '4rem' }}
          transition={{ duration: 0.8 }}
          className="mt-2 h-1 bg-green-500 mx-auto rounded-full mb-12"
        ></motion.div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {[
            {
              icon: <FaRegCalendar />,
              title: "Event Planning",
              description: "From concept to execution, we handle every detail.",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Venue Selection",
              description: "Discover the perfect venue to host your special day.",
            },
            {
              icon: <FaConciergeBell />,
              title: "Catering & Decor",
              description: "Custom menus and luxurious decorations tailored to your taste.",
            },
            {
              icon: <FaMusic />,
              title: "Entertainment & Music",
              description: "Live bands, DJs, and entertainment to keep your guests engaged.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white p-8 shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileTap={{ scale: 0.95, border: "2px solid #38a169", boxShadow: "0px 0px 20px rgba(56, 161, 105, 0.6)" }}
            >
            
              <div className="text-green-600 text-5xl mb-6 mx-auto relative">
                {service.icon}
                <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 transition duration-500 transform scale-75 group-hover:opacity-20 group-hover:scale-125 blur-xl"></div>
              </div>

            
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 transition duration-300 group-hover:text-green-600">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

             
              <div className="absolute inset-0 rounded-lg border-2 border-transparent transition duration-500 group-hover:border-green-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
