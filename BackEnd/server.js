//Importamos lo necesario
import express from "express";
import cors from "cors";
import routerAPI from "./routes/index.js";
import db from "./config/dataBase.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//asigno el puerto que viene desde el .env, en caso de estar vacio x defecto mando 3000
const port = process.env.PORT || 3000;

//creo la app express
const app = express();
app.use(cors()); //admitimos cors para accesos externos
app.use(express.json()); //admitimos json 
app.use(express.static("public")); //admitimos archivos estaticos. (index, css, etc)

//creando middleware
app.use((req, res, next) => {
    /* console.log("Middleware") */
    next();
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//creo la ruta index o root, donde se muestra el index.html (la documentacion)
app.get('/', (req, res) => {
    res.status(200).send('public/index.html')
 })

//llamamos a las rutas
routerAPI(app);

//arrancamos el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});