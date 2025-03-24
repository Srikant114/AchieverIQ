const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

dotenv.config();
connectDB();

const app = express();

// ✅ Setup CORS with options
const corsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:5173',
        'https://achiveriq.srikantsahu.in',
      ];
  
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // if using cookies
  };
  
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api', protectedRoutes);
app.use('/api/auth', authRoutes);

// ✅ Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    '\n' + '🚀 Server running at:'.bold.green + ` http://localhost:${PORT}\n`.cyan.bold
  );
});