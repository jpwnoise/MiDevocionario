import express from 'express'; 
import seguridadRouter from './rutas/seguridad.router.ts';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/seguridad', seguridadRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});