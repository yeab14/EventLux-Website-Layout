import { motion } from "framer-motion";

const PackageCard: React.FC<{
  title: string;
  description: string;
  price: string;
}> = ({ title, description, price }) => {
  return (
    <motion.div
      className="relative bg-white p-8 shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, border: "2px solid #38a169", boxShadow: "0px 0px 20px rgba(56, 161, 105, 0.6)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     
      <h3 className="text-2xl font-semibold mb-4 text-gray-800 transition duration-300 group-hover:text-green-600">
        {title}
      </h3>

    
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

  
      <p className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition duration-300">
        {price}
      </p>

  
      <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300">
        View Details
      </button>

    
      <div className="absolute inset-0 rounded-lg border-2 border-transparent transition duration-500 group-hover:border-green-500"></div>
    </motion.div>
  );
};

const PackagesSection: React.FC = () => {
  return (
    <section id="packagesSection" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto text-center">
      
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-900 tracking-wide hover:text-green-500 transition duration-300"
        >
          Our Packages
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '4rem' }}
          transition={{ duration: 0.8 }}
          className="mt-2 h-1 bg-green-500 mx-auto rounded-full mb-12"
        ></motion.div>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          <PackageCard
            title="Basic Package"
            description="Perfect for intimate gatherings."
            price="Starting at $500"
          />
          <PackageCard
            title="Standard Package"
            description="Ideal for medium-sized events with extra perks."
            price="Starting at $1,500"
          />
          <PackageCard
            title="Premium Package"
            description="A luxury, full-service package for large events."
            price="Starting at $3,000"
          />
          <PackageCard
            title="Custom Package"
            description="Tailored services to meet your unique needs."
            price="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
