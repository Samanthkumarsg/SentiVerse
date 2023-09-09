const express = require('express');
const app = express();
const pdfRoutes = require('./src/routes/pdfRoutes');
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use('/api/pdf', pdfRoutes);
app.use('/', (req, res) => {
  res.json({ message: "Sentiverse is a robust Sentiment Analysis API built using Node.js. It empowers you to analyze sentiments in text and files, making it perfect for extracting valuable insights from real-world content, such as news articles, blog posts, customer reviews, and social media data. With its ease of use and scalability, SentiVerse provides a seamless solution for understanding the emotional tone of your content.\n Endpoints:\n GET - default - /api/pdf/extract-pdf-text \n GET - Get sentiments on text input - /sentimental-report-text/:input" })
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
