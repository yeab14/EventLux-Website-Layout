import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white py-12">
      <div className="container mx-auto text-center">
        {/* Logo and Tagline */}
        <div className="mb-8">
          <h3 className="text-4xl font-extrabold text-green-500 mb-4">EventLux</h3>
          <p className="text-lg italic text-400">Crafting unforgettable moments</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white hover:text-green-600 transition-colors duration-300">
            <FaInstagram size={30} />
          </a>
          <a href="#" className="text-white hover:text-green-600 transition-colors duration-300">
            <FaFacebook size={30} />
          </a>
          <a href="#" className="text-white hover:text-green-600 transition-colors duration-300">
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Quick Links */}
        <div className="text-lg mb-8">
          {["Home", "Services", "About Us", "Packages", "Contact Us", "FAQs"].map((item) => (
            <Link
              key={item}
              to={`${item.toLowerCase().replace(/\s+/g, '')}Section`}
              smooth={true}
              duration={700}
              offset={-80} // Offset to adjust for fixed header height if needed
              className="mx-4 cursor-pointer hover:text-green-600 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mb-8">
          <p className="text-lg font-medium text-gray-300 mb-4">Stay updated with the latest from EventLux</p>
          <div className="flex justify-center items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-96 p-4 rounded-l-lg border-t border-b border-l border-gray-300 focus:ring-4 focus:ring-green-300 transition duration-300"
            />
            <button className="bg-green-600 text-white px-8 py-4 rounded-r-lg hover:bg-green-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-400 mt-8">
          <p>© 2024 EventLux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
