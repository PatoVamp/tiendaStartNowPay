import express from 'express';
import {createClient} from '@libsql/client';
import { createServer } from 'http'
import { url } from 'inspector';
import dotenv from 'dotenv'
import { ok } from 'assert';

dotenv.config()
export const turso = new createClient({
    url:process.env.TURSO_URL,
    authToken:process.env.TURSO_TOKEN
})


await turso.execute(`CREATE TABLE IF NOT EXISTS usuario (
    id VARCHAR PRIMARY KEY UNIQUE,
    nombre TEXT,
    apellido TEXT,
    email VARCHAR,
    password VARCHAR,
    telefono VARCHAR,
    pais TEXT,
    departamento TEXT,
    ciudad TEXT,
    rol TEXT
)`)

const port = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
});

app.get("/style", (req, res) => {
    res.sendFile(process.cwd() + '/public/style.css');
})

app.get("/register", (req, res) => {
    res.sendFile(process.cwd() + '/public/html/register.html');
})

app.get("/script", (req, res) => {
    res.sendFile(process.cwd() + '/public/script.js');
})

app.get("/productos", (req, res) => {
    res.sendFile(process.cwd() + '/productos.json');
})

// CREAR USUARIO
app.post("/new-user", async (req, res) => {
    const { id, nombre, apellido, email, password, telefono, pais, departamento, ciudad, rol } = req.body;
    const request = await turso.execute({
        sql: `INSERT INTO usuario (id, nombre, apellido, email, password, telefono, pais, departamento, ciudad, rol) VALUES (:id, :nombre, :apellido, :email, :password, :telefono, :pais, :departamento, :ciudad, :rol)`,
        args: { id: id, nombre:nombre, apellido:apellido, email:email, password:password, telefono:telefono, pais:pais, departamento:departamento, ciudad:ciudad, rol:rol }
    })
   
    if(request.rowsAffected > 0) {
        res.status(200).json({message:"Usuario creado con exito",data:req.body});
    }
    console.log(request);
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});