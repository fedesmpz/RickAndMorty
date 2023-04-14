import { useState } from 'react'
import validation from '../Validation/Validation'


const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password: ''        
    })

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value
        }))

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail: </label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            {
                errors.email && <p>{errors.email}</p>
            }
            <br />
            <label htmlFor="password">Contraseña: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {
                errors.password && <p>{errors.password}</p>
            }

            <button>Enviar</button>
        </form>
    );
}

export default Form;
