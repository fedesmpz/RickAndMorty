import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";



const Favorites = ({ myFavorites }) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
    
    return (

        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Hombre</option>
                <option value="Female">Mujer</option>
                <option value="Genderless">Genero</option>
                <option value="unknown">Desconocidos</option>
                <option value="allCharacters">Todos</option>
            </select>
            {
                myFavorites?.map(fav => {
                    return(
                        <div>
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                        </div>
                    )
                })
            }
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)
