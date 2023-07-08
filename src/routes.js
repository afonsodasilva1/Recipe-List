import express from 'express'
import conection from '../db/conection.js'

const routes = express()
routes.use(express.json())

routes.post('/addAutor', (req, res) => {
    const body = req.body
    const sqlCommand = 'INSERT INTO autor SET ?;' 

    conection.query(sqlCommand, body, (err, result) => {
        if(err) {
            res.status(400).json({'erro' : err})
        } else{
            res.status(201).json(result)
        }
    })
})

routes.post('/addReceita', (req, res) => {
    const body = req.body
    const sqlCommand = 'INSERT INTO receita SET ?;'

    conection.query(sqlCommand, body, (err, result) => {
        if(err) {
            res.status(400).json({'erro' : err})
        } else{
            res.status(201).json(result)
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

routes.get('/listarReceita', (req, res) => {
    const sqlCommand = 'SELECT receita.titulo, receita.ingredientes, receita.forma_preparo, autor.nome FROM receita JOIN autor ON receita.autor_id = autor.id_autor;'

    conection.query(sqlCommand, (err, result) => {
        if(err){
            res.status(404).json({'erro' : err})
        } else{
            res.status(200).json(result)
        }
    })
})

routes.get('/listarAutor', (req, res) => {
    const sqlCommand = 'SELECT * FROM autor;'

    conection.query(sqlCommand, (err, result) => {
        if(err){
            res.status(404).json({'erro' : err})
        } else{
            res.status(200).json(result)
        }
    })
})

routes.get('/pesquisarReceita/:id_receita', (req, res) => {
    const id_receita = req.params.id_receita
    const sqlCommand = 'SELECT * FROM receita WHERE id_receita = ?;'

    conection.query(sqlCommand, id_receita, (err, result) => {
        if(err){
            res.status(404).json({'erro' : err})
        } else {
            res.status(200).json(result)
        }
    })
})

routes.get('/favoritos', (req, res) => {
    const sqlCommand = 'SELECT receita.id_receita, receita.titulo  FROM receita JOIN favoritos on receita.id_receita = favoritos.receita_id;'

    conection.query(sqlCommand, (err, result) =>{
        if(err){
            res.status(404).json({'erro':err})
        }else{
            res.status(200).json(result)
        }
    })
})

routes.put('/editarReceita/:id_receita', (req, res) => {
    const body = req.body
    const id_receita = req.params.id_receita
    const sqlCommand = 'UPDATE receita SET ? WHERE id_receita = ?'

    conection.query(sqlCommand, [body, id_receita], (err, result) => {
        if (err) {
            res.status(404).json({ 'erro:': err })
        } else {
            res.status(200).json(result)
        }
    })
})

routes.delete('/apagaReceita/:id_receita', (req, res) =>{
    const id_receita = req.params.id_receita
    const sqlCommand = 'DELETE FROM receita WHERE id_receita = ?;'

    conection.query(sqlCommand, id_receita, (err, result) =>{
        if(err){
            res.status(404).json({'erro': err})
        }else{
            res.status(200).json(result)
        }
    })
})

export default routes
