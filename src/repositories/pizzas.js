const pizzas = require('../db/pizzas.json');

const getAll = () => {
    return pizzas
}

module.exports = {
    getAll
}