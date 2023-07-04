import express from 'express'
import conection from '../db/conection.js'

const routes = express()

routes.post('/addFavoritos', (req, res) =>{
    const corpo = req.body
    const sqlCommand = 'INSERT INTO favoritos SET ?;'

    conection.query(sqlCommand, corpo, (err, result) =>{
        if(err){
            res.status(400).json({'erro': err})
        }else{
            res.status(201).json(result)
        }
    })
})


export default routes
