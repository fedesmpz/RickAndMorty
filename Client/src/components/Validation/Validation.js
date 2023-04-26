const validation = (userData) => {

    const errors = {}

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El E-Mail ingresado es inválido'
    }
    if(!userData.email){
        errors.email = 'Debe ingresar un E-Mail'
    }
    if(userData.email.length > 35){
        errors.email = 'El E-Mail no debe superar los 35 caracteres'
    }
    if (!/.*\d+.*/.test(userData.password)){    
        errors.password = 'La contraseña debe tener al menos un número'
    }
    if (userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
    }



    return errors
}

export default validation;