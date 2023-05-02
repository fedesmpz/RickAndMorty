import styles from './card.module.css'
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
 
      <div className={styles.cardBox}>
         <img className={styles.cardImg} src={image} alt='' />
         <div className={styles.cardBody}>
            <div>
               <button className={styles.cardBtn} onClick= {handleFavorite}>{isFav ?'❤️' : '🤍'}</button>
               {onClose && 
               <button className={styles.cardBtn} onClick={() => onClose(id)}>X</button>
               }
            </div>
            <Link className={styles.cardTitle} to={`/detail/${id}`}> {name}</Link>
            <p className={styles.cardSubTitle}>Especie: {species} </p>
            <p className={styles.cardSubTitle}>Género: {gender}</ p>
         </div>
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