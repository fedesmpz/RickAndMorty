import './card.css'
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux'
import { useState, useEffect } from 'react';

function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
         if(isFav){
            setIsFav(false);
            removeFav(id);
         }else{
            setIsFav(true);
            addFav({id, name, species, gender, image, onClose});
         }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className='cardsBox'>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>Nombre: {name}</h2>
         </Link>
         <h2>Especie: {species}</h2>
         <h2>Género: {gender}</h2>
         <img src={image} alt='' />
         <br />

         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
 
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);