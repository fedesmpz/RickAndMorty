const { login } = require('../controllers/logins')
const { getCharacterById } = require('../controllers/getCharacterById')
const { postFav, deleteFav } = require('../controllers/handlerFavorites')

const router = require('express').Router()


router.get('/character/:id', getCharacterById)

router.get('/login', (req, res)=>{
    login(req, res)
})

router.post('/fav', (req, res)=>{
    postFav(req, res)
})

router.delete('/fav/:id', (req, res)=>{
    deleteFav(req, res)
})


module.exports = router