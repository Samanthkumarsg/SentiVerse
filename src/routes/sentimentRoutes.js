const express = require('express');
const v1Router = express.Router();
const { extractText, sentimentalReportOnPDF, sentimentalReportOnTextualData } = require('../controllers/pdfController');

v1Router.get('/extract-pdf-text', extractText);
v1Router.get('/sentiment-report-pdf', sentimentalReportOnPDF);
v1Router.get('/sentiment/:input', sentimentalReportOnTextualData);



module.exports = v1Router;