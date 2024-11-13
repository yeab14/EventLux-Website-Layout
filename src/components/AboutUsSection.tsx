import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"; 

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title with Decorative Line */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">
            About Us
          </h2>
          <div className="mt-2 h-1 w-16 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          EventLux is a premier event planning company with a passion for creating unforgettable experiences. Founded on the principles of excellence, creativity, and client-centric service, we bring your vision to life with elegance and precision.
        </motion.p>

        {/* Video Embed with Hover Effect */}
        <motion.div
          className="relative mb-10 mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <video
            src="/src/assets/eventluxvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover hover:opacity-90 transition-opacity duration-300"
          />
          {/* Overlay for Style */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 hover:opacity-40 transition-opacity duration-300"></div>
        </motion.div>

        {/* Core Values with Staggered Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Core Values
          </h3>
          <ul className="text-lg list-none pl-8 text-left max-w-lg mx-auto space-y-6"> {/* Added 'space-y-6' for larger spacing */}
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-semibold text-gray-800 flex items-center"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" /> {/* Increased margin between icon and text */}
              <span className="ml-1">
                <strong>Attention to Detail</strong>: Every event is tailored with care and precision.
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-semibold text-gray-800 flex items-center"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" /> {/* Increased margin between icon and text */}
              <span className="ml-1">
                <strong>Unmatched Service</strong>: We are dedicated to delivering exceptional service to our clients.
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="font-semibold text-gray-800 flex items-center"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" /> {/* Increased margin between icon and text */}
              <span className="ml-1">
                <strong>Endless Creativity</strong>: We strive to bring innovative and creative ideas to every event.
              </span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
