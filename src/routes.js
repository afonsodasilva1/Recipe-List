import express from 'express'
import conection from '../db/conection.js'

const routes = express()


routes.delete('/deleteReceita/:id_receita', (req, res) =>{
    const id_receita = req.params.id_receita
    const sqlCommand = 'DELETE FROM receita WHERE id = ?;'

    conection.query(sqlCommand, id_receita, (err, result) =>{
        if(err){
            res.status(404).json({'erro': err})
        }else{
            res.status(200).json(result)
        }
    })
})

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

routes.get('/showFavoritos', (req, res) => {
    const sqlCommand = 'SELECT receita.id_receita, receita.titulo  FROM receita JOIN favoritos on receita.id_receita = favoritos.receita_id;;'

    conection.query(sqlCommand, (err, result) =>{
        if(err){
            res.status(404).json({'erro':err})
        }else{
            res.status(200).json(result)
        }
    })
})

export default routes
