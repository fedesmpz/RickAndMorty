import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'
import navStyle from './nav.module.css'

const Nav = ({ onSearch, setAccess }) => {

    const handleLogout = () =>{
        
        setAccess(false)

    }


    return (
        <div className={navStyle.container}>
            <Link className={navStyle.link} to='/home'>Home</Link>
            <Link className={navStyle.link} to='/about'>Nosotros</Link>
            <Link className={navStyle.link} to='/favorites'>Favoritos</Link>
            <p className={navStyle.link} onClick={handleLogout}>LogOut</p>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;
