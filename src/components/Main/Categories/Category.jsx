//displays item of a certain category
import { useParams } from "react-router"

const Category = () => {
    const {categoryName} = useParams() 
    return (<h2>{`aquí se mostrarán los articulos de la categoria ${categoryName.toUpperCase()}`}</h2>)
}

export default Category