import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import FooterCopyrightSection from './FooterCopyrightSection';

import achieverLogo from '../assets/achieverIqLogo.png'

const socialLinks = [
  { icon: Facebook, href: '#', title: 'Facebook' },
  { icon: Twitter, href: '#', title: 'Twitter' },
  { icon: Linkedin, href: '#', title: 'LinkedIn' },
  { icon: Instagram, href: '#', title: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12 sm:px-10 lg:px-20">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {/* Brand */}
        <div>
          <img
                    src={achieverLogo}
                    alt="AchieverIQ Logo"
                    className="h-15 w-30"
                  />
          {/* <h3 className="text-white text-lg font-bold mb-2">AchieverIQ</h3> */}
          <p className="text-sm">Empowering Academic Excellence</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Courses</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-2">Contact Info</h4>
          <ul className="text-sm space-y-1">
            <li>Email: info@achieveriq.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Education Street</li>
          </ul>
        </div>

        {/* Social Icons with Tooltips */}
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            {socialLinks.map(({ icon: Icon, href, title }, index) => (
              <a
                key={index}
                href={href}
                title={title}
                aria-label={title}
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-transform transform hover:-translate-y-1"
              >
                <Icon className="w-4 h-4 text-gray-300 hover:text-white transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <FooterCopyrightSection />
    </footer>
  );
};

export default Footer;

