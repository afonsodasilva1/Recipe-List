import routes from './src/routes.js';

const PORT = 3003

routes.listen(PORT, () =>{

    console.log(`Servidor rodando no endereço: http://localhost:${PORT}/`)
})
