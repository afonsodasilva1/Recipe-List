import routes from './src/routes.js';
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.SERVER_PORT || 3003 

routes.listen(PORT, () =>{

    console.log(`Servidor rodando no endereço: http://localhost:${PORT}/listarReceita`)
})
