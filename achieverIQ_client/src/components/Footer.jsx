const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-10 mt-20">
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm">
          {/* Contact Us */}
          <div>
            <h4 className="font-bold mb-3">Contact Us</h4>
            <p>+1 234 567 890</p>
            <p>info@achieveriq.com</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Programs</a></li>
              <li><a href="#" className="hover:text-primary">Results</a></li>
            </ul>
          </div>
  
          {/* Follow Us */}
          <div>
            <h4 className="font-bold mb-3">Follow Us</h4>
            <ul className="flex space-x-4">
              <li><a href="#" aria-label="Facebook">🌐</a></li>
              <li><a href="#" aria-label="Twitter">🐦</a></li>
              <li><a href="#" aria-label="Instagram">📸</a></li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-3">Newsletter</h4>
            <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
              />
              <button
                type="submit"
                className="bg-primary text-black px-4 py-2 rounded hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Bottom Text */}
        <div className="text-center text-xs mt-10 border-t pt-4 border-gray-300 dark:border-gray-700">
          &copy; {new Date().getFullYear()} AchieverIQ. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  