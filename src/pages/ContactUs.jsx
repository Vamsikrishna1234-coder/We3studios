import React from "react";

const ContactUs = () => {
  return (   
    
    <section className="relative overflow-hidden pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4 sm:px-6 md:px-8"><br></br>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Info + Map */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Get in Touch</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            We’d love to hear from you! Whether you have a question about our services,
            projects, or just want to collaborate — reach out to us anytime.
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-lg">
              📍 <span className="text-yellow-400 font-semibold">Address:</span>  
              &nbsp;We3Design Studios, Hyderabad, India
            </p>
            <p className="text-lg">
              📞 <span className="text-yellow-400 font-semibold">Phone:</span>  
              &nbsp;+91 98765 43210
            </p>
            <p className="text-lg">
              📧 <span className="text-yellow-400 font-semibold">Email:</span>  
              &nbsp;info@we3designstudios.com
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              title="We3Design Studios Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.447714751902!2d78.47668147495538!3d17.38504438351214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978c54a3c3e5%3A0x3c4f9c1d5a6df58!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-400">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 hover:bg-yellow-400 text-black font-semibold rounded-lg transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
