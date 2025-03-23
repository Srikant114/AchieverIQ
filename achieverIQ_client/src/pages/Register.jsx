import { motion } from 'framer-motion';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Lock, User, Mail } from 'lucide-react';

import achieverLogo from '../assets/achieverIqLogo.png';

const Register = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center pt-28 pb-25 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-xl p-4 px-8"
      >
        {/* Logo and Title */}
        <div className="text-center mb-4">
            <div className='d-flex justify-content-center items-center w-100 flex flex-col'>
                      <img
                        src={achieverLogo}
                        alt="AchieverIQ Logo"
                        className="h-15 w-30"
                      />
                    </div>
          <h2 className="text-xl font-semibold mt-2">Create your account</h2>
          <p className="text-sm text-gray-500 mt-1">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </a>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm text-gray-700 block mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                className="pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm text-gray-700 block mb-1">Email address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                className="pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm text-gray-700 block mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="password"
                className="pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirm" className="text-sm text-gray-700 block mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="confirm"
                className="pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm mt-2">
            <input type="checkbox" id="terms" className="accent-blue-600" />
            <label htmlFor="terms">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-lg flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Register
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-2 text-sm text-gray-500">Or continue with</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="border rounded-md py-2 flex items-center justify-center hover:bg-gray-50 transition">
            <FaGoogle className="text-lg text-gray-600" />
          </button>
          <button className="border rounded-md py-2 flex items-center justify-center hover:bg-gray-50 transition">
            <FaFacebookF className="text-lg text-gray-600" />
          </button>
          <button className="border rounded-md py-2 flex items-center justify-center hover:bg-gray-50 transition">
            <FaTwitter className="text-lg text-gray-600" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
