import { useState } from 'react'
import validation from '../Validation/Validation'
import formStyle from './form.module.css'


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
        <div className={formStyle.container}>
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className={formStyle.fieldContainer}>
                    <div className={formStyle.field}>
                        <input type="text" placeholder='E-Mail' name="email" value={userData.email} onChange={handleChange}/>
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className={formStyle.field}>
                        <input type="password" placeholder='Contraseña' name="password" value=   {userData.password} onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                </div>
                <button className={formStyle.buttonContainer}>Enviar</button>
            </form>
        </div>
    );
}

export default Form;
