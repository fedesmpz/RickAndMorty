import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'

const Nav = ({ onSearch, setAccess }) => {

    const handleLogout = () =>{
        
        setAccess(false)

    }


    return (
        <nav>
            <button>
                <Link to='/about'>Acerca de Nosotros</Link>
            </button>
            <button>
            <Link to='/home'>Home</Link>
            </button>
            <button>
            <Link to='/favorites'>Favoritos</Link>
            </button>
            <button onClick={handleLogout}>
            LogOut
            </button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;
