const fs = require('fs/promises');
const pdf = require('pdf-parse');
const natural = require('natural');
const sentiment = require('sentiment')

const extractTextFromPDF = async (pdfPath) => {
    try {
        const pdfData = await fs.readFile(pdfPath);
        const pdfText = await pdf(pdfData);
        return pdfText.text
    } catch (error) {
        return error
    }

}

const sentimentalAnalysisOnDataFile = async (file) => {
    try {
        console.log(file)
        const text = await extractTextFromPDF(file)
        const tokenizer = new natural.WordTokenizer();
        const sentimentAnalyzer = new natural.SentimentAnalyzer("English", natural.PorterStemmer, "afinn");
        const sentimentData = sentimentAnalyzer.getSentiment(tokenizer.tokenize(text));
        return sentimentData;

    } catch (error) {
        throw error
    }
}


const sentimentalAnalysisOnText = async (input) => {
    try {
        console.log(input)
        const SentimentAnalysis = new sentiment();
        const result = SentimentAnalysis.analyze(input)
        return result;

    } catch (error) {
        throw error;
    }
}

module.exports = { extractTextFromPDF, sentimentalAnalysisOnDataFile, sentimentalAnalysisOnText };