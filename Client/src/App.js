import appStyle from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'  
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = '15899c6807ad.eca327f937a0077dd7be'

// const email = 'fede.mpz@gmail.com'
// const password = 'asd123'

const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation()
   const navigate = useNavigate()
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   const login = async (userData) => {
      try{
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         
         setAccess(access);
         access && navigate('/home');
 
      } catch(error){
         console.log(error.message);
      }
      
   }

   useEffect(() => {
      !access && navigate('/') //si access esta en false, quiere decir que siempre va a estar en true, entonces solo se va a quedar en '/'

   }, [access])

   const onSearch = async (id) =>{
      try{
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      } catch(error) {
      alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }



   return (
      <div className={appStyle.App}>
         <div>
         {
            location.pathname !== '/'
            ? <Nav onSearch = {onSearch} access={access} setAccess={setAccess}/>
            : null
         }
         </div>

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            
         </Routes>
      </div>
   );
}

export default App;
