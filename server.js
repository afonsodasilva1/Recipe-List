import routes from './src/routes.js';
import dotenv from 'dotenv'

dotenv.config()

const PORT = 3010

routes.listen(PORT, () =>{

    console.log(`Servidor rodando no endereço: http://localhost:${PORT}/listarReceita`)
    console.log(process.env.DB_PORT)
})
