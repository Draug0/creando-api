const cervezas = require("../db/cervezas.json")

const getAll = () => {
    return cervezas;
}

const getById = (id) => {
    const cerveza = (cervezas.find(beer =>
        beer.id == id
    ));

    return cerveza;
}

const getByPrice = (price) => {
    const cerveza = (cervezas.filter(beer =>
        beer.price == price
    ));

    return cerveza
}

module.exports = {
    getAll,
    getById,
    getByPrice
}