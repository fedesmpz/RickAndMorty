const PORT = 3001
const server = require('./app')
const { conn } = require('./DB_connection');


server.listen(PORT, async () =>{
    console.log(`Server is runing on port ${PORT}`)
    await conn.sync({force:true})
})

