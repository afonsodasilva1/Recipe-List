import routes from './src/routes.js';

const PORT = 3010

routes.listen(PORT, () =>{

    console.log(`Servidor rodando no endereço: http://localhost:${PORT}/listarReceita`)
})
