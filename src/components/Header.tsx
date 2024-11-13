const Header: React.FC = () => {
    return (
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">EventLux</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-gray-600">Home</a>
            <a href="#" className="hover:text-gray-600">About Us</a>
            <a href="#" className="hover:text-gray-600">Services</a>
            <a href="#" className="hover:text-gray-600">Packages</a>
            <a href="#" className="hover:text-gray-600">Gallery</a>
            <a href="#" className="hover:text-gray-600">Contact Us</a>
          </nav>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Book Now</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  