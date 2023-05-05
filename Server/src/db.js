require('dotenv').config();

const{
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)

module.exports = { database }