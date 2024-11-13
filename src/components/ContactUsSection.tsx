const ContactUsSection: React.FC = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="grid grid-cols-1 gap-4 mb-4">
              <input type="text" placeholder="Name" className="p-4 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded-lg" />
              <input type="tel" placeholder="Phone" className="p-4 border border-gray-300 rounded-lg" />
              <input type="date" className="p-4 border border-gray-300 rounded-lg" />
              <select className="p-4 border border-gray-300 rounded-lg">
                <option>Event Type</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Party</option>
              </select>
              <textarea placeholder="Message" className="p-4 border border-gray-300 rounded-lg h-40"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded">Send Inquiry</button>
          </form>
          <div className="mt-8">
            <p>Address: 123 Luxury Ave, City, State</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@eventlux.com</p>
          </div>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUsSection;
  