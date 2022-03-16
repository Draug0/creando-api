const botellasRepository = require('../repositories/botellas')

const getAll = (req, res) => {
    try {
        const botellas = botellasRepository.getAll();

        return res.status(200).json(botellas);
    }
    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
}

const getById = (req, res) => {
    try {
        const id = req.params.id;
        const botella = botellasRepository.getById(id);

        if (botella === undefined) {
            return res.status(404).json({
                msg: 'Bottle Not Found'
            })
        }

        return res.status(200).json(botella)
    }
    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
}

const getByName = (req, res) => {
    try {
        const name = req.params.name
        const botella = botellasRepository.getByName(name);

        if (botella === undefined) {
            return res.status(404).json({
                msg: 'Bottle Not Found'
            })
        }

        return res.status(200).json(botella)
    }

    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
}

const getByPrice = (req, res) => {
    try {
        const price = req.params.price;
        const botella = botellasRepository.getByPrice(price);

        if (botella === undefined) {
            return res.status(404).json({
                msg: 'Bottle Not Found'
            })
        }

        return res.status(200).json(botella)
    }
    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
}

const getByPriceRange = (req, res) => {
    try {
        const minPrice = req.params.min;
        const maxPrice = req.params.max;

        const botella = botellasRepository.getByPriceRange(minPrice, maxPrice);

        if(botella === undefined) {
            return res.status(404).json({
                msg: 'Bottle Not Found'
            })
        }

        return res.status(200).json(botella)
    }
    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        })
    }
}

module.exports = {
    getAll,
    getById,
    getByName,
    getByPrice,
    getByPriceRange
}