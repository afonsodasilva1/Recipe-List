import mysql from 'mysql'

const conection  = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'recipe_list'
})

conection.connect()

export default conection