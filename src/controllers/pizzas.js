const pizzasRepository = require('../repositories/pizzas');

const getAll = (req, res) => {
    try {
        const pizzas = pizzasRepository.getAll();

        return res.status(200).json(pizzas)
    }
    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
}

module.exports = {
    getAll
}