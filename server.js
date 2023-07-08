import routes from './src/routes.js';
import dotenv from 'dotenv'

dotenv.config()

const PORT = 

routes.listen(PORT, () =>{

    console.log(`Servidor rodando no endereço: http://localhost:${PORT}/listarReceita`)
})
