import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Lock, User, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

import achieverLogo from '../assets/achieverIqLogo.png';
import { callApi } from '../utils/callApi';

const Register = () => {
  // -----------------------------
  // 1) State for form data & errors
  // -----------------------------
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // 2) onChange handler
  // -----------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // -----------------------------
  // 3) Front-end validation
  // -----------------------------
  const validateFields = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (formData.password !== formData.confirm) {
      newErrors.confirm = 'Passwords do not match.';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'You must accept the Terms and Privacy Policy.';
    }

    return newErrors;
  };

  // -----------------------------
  // 4) Form submission
  // -----------------------------
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setServerError('');
  //   setLoading(true);

  //   // Validate inputs
  //   const foundErrors = validateFields();
  //   if (Object.keys(foundErrors).length > 0) {
  //     setErrors(foundErrors);
  //     toast.error("Please fix the highlighted errors.", { duration: 3000 });
  //     setLoading(false);
  //     return;
  //   }
  //   setErrors({}); // Clear old errors if any

  //   try {
  //     // Example dynamic base URL (Vite style), fallback to localhost
  //     const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  //     const endpoint = `${baseURL}/api/auth/register`;

  //     // Prepare the data to send
  //     const submissionData = {
  //       userName: `${formData.firstName}${formData.lastName}`, // Alternatively, prompt the user for a userName if needed
  //       firstName: formData.firstName,
  //       lastName: formData.lastName,
  //       email: formData.email,
  //       password: formData.password,
  //     };

  //     const response = await axios.post(endpoint, submissionData);
  //     console.log('Registration success:', response.data);

  //     toast.success(response.data.message || "Registration successful.", { duration: 2000 });
  //     // Optionally redirect or reset form here
  //   } catch (error) {
  //     console.error('Registration error:', error);
  //     const errorMsg = error.response?.data?.message || 'Something went wrong.';
  //     setServerError(errorMsg);
  //     toast.error(errorMsg, { duration: 3000 });
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  // inside your Register component:
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    setLoading(true);
  
    // Validate inputs
    const foundErrors = validateFields();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      toast.error("Please fix the highlighted errors.", { duration: 3000 });
      setLoading(false);
      return;
    }
    setErrors({}); // Clear old errors if any
  
    try {
      // Prepare the data to send
      const submissionData = {
        userName: `${formData.firstName}${formData.lastName}`, // Alternatively, prompt the user for a userName if needed
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };
  
      // Call your API via the reusable callApi function.
      const response = await callApi({
        method: "POST",
        url: "auth/register", // Relative endpoint that will be appended to your base apiUrl
        data: submissionData,
      });
  
      console.log('Registration success:', response.data);
      toast.success(response.data.message || "Registration successful.", { duration: 2000 });
      // Optionally redirect or reset form here.
    } catch (error) {
      console.error('Registration error:', error);
      const errorMsg = error.response?.data?.message || 'Something went wrong.';
      setServerError(errorMsg);
      toast.error(errorMsg, { duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  
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
          <div className="d-flex justify-content-center items-center w-100 flex flex-col">
            <img src={achieverLogo} alt="AchieverIQ Logo" className="h-15 w-30" />
          </div>
          <h2 className="text-xl font-semibold mt-2">Create your account</h2>
          <p className="text-sm text-gray-500 mt-1">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline font-medium">
              Sign in
            </a>
          </p>
        </div>

        {/* Server Error */}
        {serverError && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {serverError}
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* User Name */}
          <div>
            <label htmlFor="name" className="text-sm text-gray-700 block mb-1">
              User Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                name="name"
                className={`pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="Your user name"
                value={formData.name || ''}
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="text-sm text-gray-700 block mb-1">
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                className={`pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.firstName ? 'border-red-500' : ''
                }`}
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="text-sm text-gray-700 block mb-1">
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                className={`pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.lastName ? 'border-red-500' : ''
                }`}
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm text-gray-700 block mb-1">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                className={`pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm text-gray-700 block mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="password"
                name="password"
                className={`pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.password ? 'border-red-500' : ''
                }`}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm" className="text-sm text-gray-700 block mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="confirm"
                name="confirm"
                className={`pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.confirm ? 'border-red-500' : ''
                }`}
                placeholder="••••••••"
                value={formData.confirm}
                onChange={handleChange}
              />
            </div>
            {errors.confirm && (
              <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 text-sm mt-2">
            <input
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="accent-blue-600"
            />
            <label htmlFor="terms">
              I agree to the{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-xs text-red-500 mt-1">{errors.termsAccepted}</p>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
            disabled={loading}
          >
            <Lock className="w-4 h-4" />
            {loading ? 'Registering...' : 'Register'}
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
