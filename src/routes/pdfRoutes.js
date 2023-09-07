const express = require('express');
const router = express.Router();
const {extractText, sentimentalReportOnPDF,sentimentalReportOnTextualData} = require('../controllers/pdfController');

router.get('/extract-pdf-text', extractText);
router.get('/sentimental-report-pdf', sentimentalReportOnPDF);
router.get('/sentimental-report-text/:input', sentimentalReportOnTextualData);




module.exports = router;