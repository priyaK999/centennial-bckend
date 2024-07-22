const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { dbConnect } = require('../config/DbConnection');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
dbConnect();

// Define email schema and model
const EmailSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  query: String,
});

const Email = mongoose.model('Email', EmailSchema);

// Define newsletter subscription schema and model
const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const Newsletter = mongoose.model('Newsletter', NewsletterSchema);

// Define comment schema and model
const CommentSchema = new mongoose.Schema({
  text: String,
});

const Comment = mongoose.model('Comment', CommentSchema);

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Handle form submission
app.post('/submit-form', async (req, res) => {
  const { name, phone, email, query } = req.body;

  try {
    const newEmail = new Email({ name, phone, email, query });
    await newEmail.save();
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    res.status(500).send('Error submitting form');
  }
});

// Handle comment submission
app.post('/comments', async (req, res) => {
  const { text } = req.body;

  try {
    const newComment = new Comment({ text });
    await newComment.save();
    res.status(201).send('Comment added!');
  } catch (error) {
    res.status(500).send('Error adding comment');
  }
});

// Handle retrieving comments
app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send('Error retrieving comments');
  }
});

// Add this function to validate email format
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Handle newsletter subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).send('Please enter a valid email.');
  }

  try {
    const existingEmail = await Newsletter.findOne({ email });

    if (existingEmail) {
      return res.status(400).send('Email is already subscribed.');
    }

    const newSubscription = new Newsletter({ email });
    await newSubscription.save();
    res.status(201).send('Subscription successful!');
  } catch (error) {
    res.status(500).send('Error subscribing');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
