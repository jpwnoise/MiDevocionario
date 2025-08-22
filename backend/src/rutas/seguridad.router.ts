import {Router} from 'express';
const router = Router();
import { ingresar } from '../controller/seguridad.controller.ts';

router.post('/ingresar', ingresar );
router.get('/perfil', (req, res) => {} );
router.get('/configuracion', (req, res) => {} );    
router.get('/cerrar-sesion', (req, res) => {} );

export default router;
