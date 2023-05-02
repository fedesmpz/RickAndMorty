import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import favStyles from './favorites.module.css'



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
            <div className={favStyles.body}>
                <div className={favStyles.select}>
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
                </div>
            </div>
            <div className={favStyles.cardsContainer}>{
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
                        
                        />
                        </div>
                    )
                })
            }
            </div>
            
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
