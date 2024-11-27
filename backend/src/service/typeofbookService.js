const TypeofbookR = require('../repositories/typeofbookRepository');

const findTypeofbook = async(body) => {
    const typeofbook = await TypeofbookR.findTypeofbook(body)
    if(!typeofbook) {
        throw new Error("No se encontró el tipo de libro")
    }
    return typeofbook
}

module.exports = {
    findTypeofbook
}