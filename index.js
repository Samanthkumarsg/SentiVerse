const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const v1Router = require('./src/routes/sentimentRoutes');

const PORT = process.env.PORT || 7000;

const app = express();
const cors = require('cors');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/', limiter);
app.use('/api/v1', v1Router);
app.use('/', (req, res,) => {
  res.json({
    message:
      "Sentiverse is a robust Sentiment Analysis API built using Node.js. It empowers you to analyze sentiments in text and files, making it perfect for extracting valuable insights from real-world content, such as news articles, blog posts, customer reviews, and social media data. With its ease of use and scalability, SentiVerse provides a seamless solution for understanding the emotional tone of your content.\n Endpoints:\n GET - default - /api/pdf/extract-pdf-text \n GET - Get sentiments on text input - /sentimental-report-text/:input",
  });
});


app.use((req, res, next) => {
  res.status(404).send({ message: "Not Found" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
