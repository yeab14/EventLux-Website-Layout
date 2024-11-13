import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">EventLux – Crafting unforgettable moments</h3>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-white hover:text-green-600"><FaInstagram /></a>
          <a href="#" className="text-white hover:text-green-600"><FaFacebook /></a>
          <a href="#" className="text-white hover:text-green-600"><FaTwitter /></a>
        </div>
        <div className="text-lg mb-6">
          <a href="#" className="mx-4 hover:text-green-600">Home</a>
          <a href="#" className="mx-4 hover:text-green-600">Services</a>
          <a href="#" className="mx-4 hover:text-green-600">About Us</a>
          <a href="#" className="mx-4 hover:text-green-600">Packages</a>
          <a href="#" className="mx-4 hover:text-green-600">Contact Us</a>
        </div>
        <div>
          <p className="text-lg mb-4">Stay updated with the latest from EventLux</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg border-t border-b border-l border-gray-300"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-r-lg">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
