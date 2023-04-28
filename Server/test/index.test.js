const app = require('../src/app');
const session = require('supertest');
const { forEach } = require('../src/utils/users');
const request = session(app);

const obj ={
    id: 21,
    name: 'dai',
    species: 'human',
    origin: {
        name: 'earth'
    },
    image: 'img.jpg',
    gender: 'female',
    status: 'alive'
}


describe("Test de rutas", () =>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async () => {
            // await request.get('/rickandmorty/character/1').expect(200);
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200)
        })


        it("Responde un objeto con las propiedades 'id', 'name', 'species', 'gender', 'status', 'origin', e 'image' ", async () =>{
            const response = await request.get('/rickandmorty/character/1')

            for(const prop in obj){
                expect(response.body).toHaveProperty(prop)
            }

            const props = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image']
            props.forEach(prop =>{
                expect(response.body).toHaveProperty(prop)
            })
        })


        it("Si hay un error responde con status 500", async () =>{
            const response = await request.get('/rickandmorty/character/2587j')
            expect(response.statusCode).toBe(500)
        })
    })

    describe("GET /rickandmorty/login", () =>{
        it("Responde con un objeto con la propiedad access en true si la informacion es correcta", async () =>{
            const email = 'fede.mpz@gmail.com'
            const password = 'asd123'
            const access = { access: true }
            const response = await request.get(`/rickandmorty/login?email=${email}&password=${password}`)
            expect(response.body).toEqual(access)
        })

        it("Responde con un objeto con la propiedad access en false si la informacion es incorrecta", async () =>{
            const email = 'fede.m@gmail.com'
            const password = 'asd12'
            const access = { access: false }
            const response = await request.get(`/rickandmorty/login?email=${email}&password=${password}`)
            expect(response.body).toEqual(access)
        })
    })

    describe("POST /rickandmorty/fav", ()=>{
        it("debe guardar el personaje en favorito", async () =>{
            const response = await request.post('/rickandmorty/fav').send(obj)
            expect(response.body).toContainEqual(obj)
        })

        it("Debe agregar personajes a favoritos sin eliminar los anteriores", async () =>{
            obj.id = 9998;
            obj.name = 'fedes'
            const response = await request.post('/rickandmorty/fav').send(obj)
            expect(response.body.length).toBe(2)
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () =>{
        it("si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/2')
            expect(response.body.length).toBe(2)
        })


        it("si el ID solicitado existe, deberia eliminarlo de los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/9998')
            expect(response.body.length).toBe(1)
        })
    })

})