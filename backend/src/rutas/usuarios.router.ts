import { Router } from 'express';
import { getUsuarios, getUsuarioById, crearUsuario, actualizarUsuario, eliminarUsuario } from '../controller/usuario.controller.ts';

const router = Router();

// Obtener todos los usuarios
router.get('/', getUsuarios);

// Obtener un usuario por ID
router.get('/:id', getUsuarioById);

// Crear un nuevo usuario
router.post('/', crearUsuario);

// Actualizar un usuario existente
router.put('/:id', actualizarUsuario);

// Eliminar un usuario
router.delete('/:id', eliminarUsuario);

export default router;