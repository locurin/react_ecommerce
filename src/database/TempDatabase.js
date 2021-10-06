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


const TempDatabase = () => {return [item1, item2, item3]}

export default TempDatabase