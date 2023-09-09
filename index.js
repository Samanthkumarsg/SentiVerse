const express = require('express');
const app = express();
const pdfRoutes = require('./src/routes/pdfRoutes');
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use('/api/pdf', pdfRoutes);
app.use('/', (req, res) => {
  res.json({ message: "hello world" })
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
