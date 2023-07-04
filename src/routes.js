import express from 'express'

const routes = express()

routes.get('/', (req, res) =>{
    res.send('Hello, World!')
})

export default routes