import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AboutUsSection: React.FC = () => {
  return (
    <section
      id="aboutusSection"
      className="relative py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-green-400 opacity-30 rounded-full filter blur-2xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 right-1/4 w-96 h-96 bg-green-500 opacity-20 rounded-full filter blur-3xl"
          animate={{ x: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide hover:text-green-500 transition duration-300">
            About Us
          </h2>
          <div className="mt-2 h-1 w-16 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed hover:text-green-500 transition duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          EventLux is a premier event planning company with a passion for
          creating unforgettable experiences. Founded on the principles of
          excellence, creativity, and client-centric service, we bring your
          vision to life with elegance and precision.
        </motion.p>

        <motion.div
          className="relative mb-10 mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <video
            src=" /assets/eventluxvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-gray-900">
            Our Core Values
          </h3>
          <ul className="text-lg list-none pl-8 text-left max-w-lg mx-auto space-y-6">
            {[
              "Attention to Detail",
              "Unmatched Service",
              "Endless Creativity",
            ].map((value, index) => (
              <motion.li
                key={value}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                className="font-semibold text-gray-800 flex items-start"
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-500 mr-3 mt-1 animate-pulse transition duration-500 ease-in-out hover:rotate-45"
                />
                <span className="ml-1 hover:text-green-500 transition duration-300">
                  <strong>{value}</strong>: {getValueDescription(value)}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const getValueDescription = (value: string): string => {
  switch (value) {
    case "Attention to Detail":
      return "Every event is tailored with care and precision.";
    case "Unmatched Service":
      return "We are dedicated to delivering exceptional service to our clients.";
    case "Endless Creativity":
      return "We strive to bring innovative and creative ideas to every event.";
    default:
      return "";
  }
};

export default AboutUsSection;
