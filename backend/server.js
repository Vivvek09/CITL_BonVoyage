const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("./models/User");

const app = express();
app.use(express.json());
app.use(cookieParser());

const accessTokenSecret = "jiqwuexhuqxmujiqxr8q38q2m8u9x9x34quxrt6ytf";
const refreshTokenSecret = "jiqwuexhuqxmujiqxr8q38q2m8u9x9x34quxrt6ytt";
let refreshTokens = [];
const allowedOrigins = ['http://localhost:5173']; // Add your frontend URL

// CORS configuration
const corsOptions = {
    origin: allowedOrigins,
    credentials: true, // Allow credentials (like cookies)
};

// Apply CORS middleware
app.use(cors(corsOptions));

mongoose.connect('mongodb+srv://venishakalola:KaD65RLvTAbm6IYh@cluster0.8uujn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// mongoose.connect('mongodb://localhost/bonvoyage')
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });    

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const accessToken = jwt.sign({ userId: user._id }, accessTokenSecret, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: user._id }, refreshTokenSecret, { expiresIn: '7d' });
    refreshTokens.push(refreshToken);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: false, // Set to true in production (over HTTPS)
      sameSite: 'Lax',
      maxAge: 60 * 60 * 1000 // 1 hour
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: false, // Set to true in production (over HTTPS)
      sameSite: 'Lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

app.post("/api/token", (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.sendStatus(401);
  }
  if (!refreshTokens.includes(token)) {
    return res.sendStatus(403);
  }
  jwt.verify(token, refreshTokenSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const accessToken = jwt.sign({ userId: user.userId }, accessTokenSecret, { expiresIn: '1h' });
    res.json({ accessToken });
  });
});

app.post("/api/logout", (req, res) => {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter(t => t !== token);
  res.sendStatus(204);
});

const eventRoutes = require('../backend/models/EventRoutes');

app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb://localhost/bonvoyage', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use('/api/events', eventRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



