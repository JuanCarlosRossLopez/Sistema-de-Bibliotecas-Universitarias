const Typeofbook = require('../models/TypeOfBook');

const findTypeofbook = async(body) => {
    try {
        return await Typeofbook.findAll(body)
    } catch(error) {
        console.error("No se pudo encontrar el tipo de libro")
        throw error
    }
};

module.exports={
    findTypeofbook
}