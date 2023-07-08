import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const conection  = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.DB_PASSWORD,
    database: 'recipe_list'
})

conection.connect()

export default conection
