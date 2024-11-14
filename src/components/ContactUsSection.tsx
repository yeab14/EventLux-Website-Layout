import { motion } from "framer-motion";

const ContactUsSection: React.FC = () => {
  return (
    <section
      id="contactusSection"
      className="relative py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-900 tracking-wide mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-2 h-1 w-20 bg-green-500 mx-auto rounded-full mb-8"
        ></motion.div>

        <motion.form
          className="relative z-10 max-w-lg mx-auto p-8 bg-white rounded-xl shadow-xl border-t-4 border-green-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="p-4 border border-green-200 rounded-lg bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 hover:shadow-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border border-green-200 rounded-lg bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 hover:shadow-xl"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-4 border border-green-200 rounded-lg bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 hover:shadow-xl"
            />
            <input
              type="date"
              className="p-4 border border-green-200 rounded-lg bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 hover:shadow-xl"
            />
            <select className="p-4 border border-green-200 rounded-lg bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 hover:shadow-xl">
              <option>Event Type</option>
              <option>Wedding</option>
              <option>Corporate</option>
              <option>Party</option>
            </select>
            <textarea
              placeholder="Message"
              className="p-4 border border-green-200 rounded-lg bg-green-50 h-40 focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 hover:shadow-xl"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, border: "2px solid rgba(34,197,94, 1)" }}
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 hover:bg-green-700 hover:text-glow"
          >
            Send Inquiry
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 relative"
        >
          <iframe
            title="EventLux Location"
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={true}
          ></iframe>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute top-10 left-10 bg-white p-4 rounded-lg shadow-xl border border-green-200"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <h3 className="text-lg font-bold text-green-700">
              EventLux Location
            </h3>
            <p className="text-gray-600">📍 123 Luxury Ave, City, State</p>
            <p className="text-gray-600">📞 (123) 456-7890</p>
            <p className="text-gray-600">✉️ contact@eventlux.com</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;
