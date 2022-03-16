const milanesas = require('../db/milanesas.json');

const getAll = () => {
    return milanesas;
}

const getById = (id) => {
    const milanesa = (milanesas.find(milanesa => 
        milanesa.id == id
    ))

    return milanesa
}

const getByName = (name) => {
    const re = new RegExp(name.toLowerCase());
    const milanesa = (milanesas.filter(milanesa => 
        re.test(milanesa.name.toLowerCase())
    ));

    return milanesa;
}

const getByPrice = (price) => {
    const milanesa = (milanesas.filter(milanesa =>
        milanesa.price == price    
    ));

    return milanesa;
}

const getByPriceRange = (minPrice, maxPrice) => {
    const milanesa = (milanesas.filter(milanesa => 
        milanesa.price >= minPrice && milanesa.price <= maxPrice    
    ))

    return milanesa
}

module.exports = {
    getAll,
    getById,
    getByName,
    getByPrice,
    getByPriceRange
}