
const testController  = async (req, res) => {
    try {
        res.json({ text: "demo test" });
    } catch (error) {
        res.status(500).json({ error: 'Error' });

    }
}

module.exports = {
    testController
}