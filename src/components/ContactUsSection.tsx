// ContactUsSection with enhanced UI
import { motion } from "framer-motion";

const ContactUsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-900 tracking-wide"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-2 h-1 w-16 bg-green-500 mx-auto rounded-full mb-8"
        ></motion.div>
        
        {/* Form with subtle animations */}
        <motion.form
          className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Input fields with engaging styles */}
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input type="text" placeholder="Name" className="p-4 border border-gray-300 rounded-lg transition duration-300 hover:shadow-lg focus:ring-2 focus:ring-green-500" />
            <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded-lg transition duration-300 hover:shadow-lg focus:ring-2 focus:ring-green-500" />
            <input type="tel" placeholder="Phone" className="p-4 border border-gray-300 rounded-lg transition duration-300 hover:shadow-lg focus:ring-2 focus:ring-green-500" />
            <input type="date" className="p-4 border border-gray-300 rounded-lg transition duration-300 hover:shadow-lg focus:ring-2 focus:ring-green-500" />
            <select className="p-4 border border-gray-300 rounded-lg transition duration-300 hover:shadow-lg focus:ring-2 focus:ring-green-500">
              <option>Event Type</option>
              <option>Wedding</option>
              <option>Corporate</option>
              <option>Party</option>
            </select>
            <textarea placeholder="Message" className="p-4 border border-gray-300 rounded-lg h-40 transition duration-300 hover:shadow-lg focus:ring-2 focus:ring-green-500"></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded shadow-lg hover:bg-green-700 transition-transform duration-300"
          >
            Send Inquiry
          </motion.button>
        </motion.form>

        {/* Contact info with decorative lines */}
        <div className="mt-8">
          <p className="text-lg">Address: 123 Luxury Ave, City, State</p>
          <p className="text-lg">Phone: (123) 456-7890</p>
          <p className="text-lg">Email: contact@eventlux.com</p>
        </div>

        {/* Animated map with hover effect */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg transition duration-300 hover:scale-105"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;
