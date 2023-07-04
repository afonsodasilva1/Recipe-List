import express from 'express'
import conection from '../db/conection.js'

const routes = express()

routes.post('/addFavoritos', (req, res) =>{
    const corpo = req.body
    const sqlCommand = 'INSERT INTO favoritos SET ?;'


})

export default routes