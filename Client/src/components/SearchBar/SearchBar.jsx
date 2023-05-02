import { useState } from 'react';
import styleSearchBar from './searchBar.module.css'



export default function SearchBar({ onSearch }) {

   const [ id, setId ] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }
   return (
      <div className={styleSearchBar.search}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setId('')}}>🔍</button>
      </div>
   );
}
