import express from 'express'; 
import seguridadRouter from './rutas/seguridad.router.ts';
import cors from 'cors';
import session from 'express-session';


const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200', // o el origen de tu frontend
    credentials: true
}));

app.use(session({
  secret: 'm1d3v0c10nar10_s3cr3t_k3y',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,   // true si usas HTTPS
    maxAge: 1000 * 60 * 60 // 1 hora
  }
}));

app.use('/api/seguridad', seguridadRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});