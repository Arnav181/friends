const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const friendshipRoutes = require('./routes/friendshipRoutes');
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect("mongodb://127.0.0.1:27017/friendshipDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/friendship', friendshipRoutes);

app.get('/', (req, res) => {
  res.send('Friendship Calculator API is Running');
});

const PORT = process.env.PORT || 5010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
