const typeofbookService = require('../service/typeofbookService');

const getTypeofbook = async (req, res) => {
    try {
        const typeofbook = await typeofbookService.findTypeofbook();
        res.status(200).json(typeofbook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getTypeofbook
}