const URL = 'https://rickandmortyapi.com/api/character'
const axios = require('axios')


const getCharacterById = async (req, res) =>{

    try{
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`) //si hay un error en axios o en la peticion, el mismo axios genera el error

        if(!data.name) throw new Error(`ID: ${id} Not Found`) //conviene ponerlo arriba para validar que no haya un error, si hay error sale de la funcion y corta la ejecucion
        //si no hay error, sigue con el codigo normalmente, entonces nos evitamos otro if
        
        const character ={
            id: data.id,
            name: data.name, 
            gender: data.gender, 
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
            }

        return res.status(200).json(character)    
        // return res.status(404).send('Not Found')

    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
        
    }

    // .catch(error => {
    //     return res.status(500).send(error.message)
}



module.exports = {
    getCharacterById
}