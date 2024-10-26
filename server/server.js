// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // for parsing application/json

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/fast-task', { 
//   // Remove deprecated options here if you've already done so
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Define a simple GET route for the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the Task Manager API!');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Mount auth routes at /api/auth

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
