import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EnrollModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold mb-2">Enrollment Info</h3>
            <p className="text-sm text-gray-600 mb-4">
              Visit our center to complete the enrollment process. <br />
              Feel free to contact us for more details!
            </p>
            <button
              onClick={onClose}
              className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnrollModal;
