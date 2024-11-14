import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white flex justify-between items-center px-4 py-2">
      <div className="text-sm">
        <span>Phone: (123) 456-7890 | Email: info@eventlux.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <FaInstagram className="cursor-pointer" />
        <FaFacebook className="cursor-pointer" />
        <FaTwitter className="cursor-pointer" />
        <button className="bg-green-600 px-4 py-1 rounded">
          Login / Register
        </button>
      </div>
    </div>
  );
};

export default TopBar;
