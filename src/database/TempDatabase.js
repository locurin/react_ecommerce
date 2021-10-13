// temporary database of item objets on sale

function itemOnSale(id, name, category, price, description) {
    this.id = id
    this.name = name
    this.category = category
    this.price = price
    this.description = description
}

const item1 = new itemOnSale(1, 'kush-47', 'sativa', 300, 'pega como padrastro borracho')
const item2 = new itemOnSale(2, 'peronium', 'sativa', 200, 'mas chino que la muralla')
const item3 = new itemOnSale(3, 'goshira glu', 'indica', 600, 'aeeeea soy sabalero')
const item4 = new itemOnSale(4, 'pipa re cheta', 'fumadores', 500, 'pipa de madera')
const item5 = new itemOnSale(5, 'fertilizante top crop', 'jardineria', 400, 'sube como el dolar')


const TempDatabase = () => {
    return [item1, item2, item3, item4, item5]
}

export default TempDatabase