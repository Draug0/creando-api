const botellas = require('../db/botellas.json')

const getAll = () => {
    return botellas
}

const getById = (id) => {
    const botella = (botellas.find(bottle =>
        bottle.id == id    
    ))

    return botella;
}

const getByName = (name) => {
    const re = new RegExp(name.toLowerCase());
    const botella = (botellas.filter(botella => 
        re.test(botella.name.toLowerCase())
    ));

    return botella;
}

const getByPrice = (price) => {
    const botella = (botellas.filter(bottle =>
        bottle.price == price    
    ));

    return botella;
}

const getByPriceRange = (minPrice, maxPrice) => {
    const botella = (botellas.filter(bottle => 
        bottle.price >= minPrice && bottle.price <= maxPrice    
    ))

    return botella
}

module.exports = {
    getAll,
    getById,
    getByName,
    getByPrice,
    getByPriceRange
}