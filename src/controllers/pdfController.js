const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const { extractTextFromPDF , sentimentalAnalysisOnDataFile,sentimentalAnalysisOnText} = require("../models/pdfFunction");


const extractText = async (req, res) => {
  try {
      const pdfPath = 'src/assets/samanth.pdf'; 
      const extractedText = await extractTextFromPDF(pdfPath);
      res.json({ data: extractedText });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error extracting PDF text' });
    }
  };

  const sentimentalReportOnPDF = async (req, res) => {
    try {
        const {file} = req.body;
        const pdfPath = 'src/assets/samanth.pdf'; 
        const extractedText = await sentimentalAnalysisOnDataFile(file);
        res.status(201).json({ data: extractedText });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error extracting PDF text' });
      }
    };

    const sentimentalReportOnTextualData = async (req, res) => {
      try {

          let Emotion;
          let data = []
          const input = req.params.input
          console.log(input);
          let sentimentAnalysisResults = await sentimentalAnalysisOnText(input);
          if(sentimentAnalysisResults.score > 0){
            sentimentAnalysisResults.emotion  = "Positive 😁🙂"
          } else if(sentimentAnalysisResults.score < 0){
            sentimentAnalysisResults.emotion  = "Negative 😕"
          }
          else{
            sentimentAnalysisResults.emotion  = "Neutral 😶"
          }
          
          res.status(201).json({ data: sentimentAnalysisResults });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error extracting PDF text' });
        }
      };
  
module.exports = {extractText,sentimentalReportOnPDF,sentimentalReportOnTextualData};