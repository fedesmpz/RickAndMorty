import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styleDetail from './detail.module.css'
import { Link } from 'react-router-dom'

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = '15899c6807ad.eca327f937a0077dd7be'

const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({}) 

    useEffect(() => {
        // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <Link className={styleDetail.cardContainer} to='/home'>
            <div className={styleDetail.cardBox}>
                <img className={styleDetail.cardImg} src={character?.image} alt={character?.name} />

                <div className={styleDetail.cardBody}>
                    <h1 className={styleDetail.cardTitle}> {character?.name}</h1>
                    <p className={styleDetail.cardSubTitle}>Especie: {character?.species} </p>
                    <p className={styleDetail.cardSubTitle}>Género: {character?.gender}</ p>
                    <p className={styleDetail.cardSubTitle}>Origen: {character?.origin?.name}</ p>
                    <p className={styleDetail.cardSubTitle}>Estado: {character?.status}</ p>
                </div>
            </div>
        </Link>
    );
}

export default Detail;
