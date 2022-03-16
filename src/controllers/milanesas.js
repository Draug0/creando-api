const milanesasRepository = require('../repositories/milanesas');

const getAll = (req, res) => {
    try {
        const milanesas = milanesasRepository.getAll();

        return res.status(200).json(milanesas);
    }
    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
}

const getById = (req, res) => {
    try {
        const id = req.params.id
        const milanesa = milanesasRepository.getById(id);

        if (milanesa === undefined) {
            return res.status(404).json({
                msg: 'Milanesa Not Found'
            })
        }

        return res.status(200).json(milanesa);
    }
    catch(err) {
        return res.status(500).json({
            msg: 'Internal Server Error'
        });
    }
}

const getByName = (req, res) => {
    try {
        const name = req.params.name
        const milanesa = milanesasRepository.getByName(name);

        if (milanesa === undefined) {
            return res.status(404).json({
                msg: 'Milanesa Not Found'
            })
        }

        return res.status(200).json(milanesa)
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
        const milanesa = milanesasRepository.getByPrice(price);

        if (milanesa === undefined) {
            return res.status(404).json({
                msg: 'Milanesa Not Found'
            })
        }

        return res.status(200).json(milanesa)
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

        const milanesa = milanesasRepository.getByPriceRange(minPrice, maxPrice);

        if(milanesa === undefined) {
            return res.status(404).json({
                msg: 'Milanesa Not Found'
            })
        }

        return res.status(200).json(milanesa)
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