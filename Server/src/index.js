const PORT = 3001
const server = require('./index')


server.listen(PORT, () =>{
    console.log(`Server is runing on port ${PORT}`)
})

