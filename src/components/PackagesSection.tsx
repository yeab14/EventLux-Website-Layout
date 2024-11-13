const PackageCard: React.FC<{ title: string, description: string, price: string }> = ({ title, description, price }) => {
    return (
      <div className="bg-white p-6 shadow-lg rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <p className="text-2xl font-bold mb-4">{price}</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded">View Details</button>
      </div>
    );
  };
  
  const PackagesSection: React.FC = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">
            Our Packages
          </h2>
          <div className="mt-2 h-1 w-16 bg-green-500 mx-auto rounded-full mb-8"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  