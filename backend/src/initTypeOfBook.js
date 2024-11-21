const TypeBook = require('./models/TypeOfBook');

const initTypeBook = async () => {
    const typeBook = [
        { type_of_book: 'fisico'},
        { type_of_book: 'digital'},
        { type_of_book: 'ambos'},
    ];

    for (const type of typeBook) {
        const existingType = await TypeBook.findOne({ where: { type_of_book: type.type_of_book } });
        if (!existingType) {
            await TypeBook.create(type);
        }
    }
};

module.exports= initTypeBook;