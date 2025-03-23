import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <section className="py-16 pt-32 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[100px] rounded-full -top-32 -left-32 z-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white max-w-2xl mx-auto p-8 rounded-xl shadow-xl z-10 relative"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <form className="space-y-5">
          {/* Name Fields */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email & Phone */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Subject */}
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>General Inquiry</option>
            <option>Admissions</option>
            <option>Feedback</option>
            <option>Technical Support</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="accent-blue-500"
            />
            I agree to the <a href="#" className="underline text-blue-500">privacy policy</a>
          </label>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
