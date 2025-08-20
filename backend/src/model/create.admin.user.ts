// createAdmin.ts
import { UserModel } from './usuarios.model.ts';
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

async function createAdminUser() {
  try {
    // 1. Opcional: Asegurarse de que el rol "admin" exista
    const adminRole = await prisma.rol.findUnique({
      where: { nombre: 'admin' },
    });

    if (!adminRole) {
      console.error("Error: El rol 'admin' no existe en la base de datos. Por favor, créalo primero.");
      return;
    }

    // 2. Definir los datos del nuevo usuario
    const userData = {
      nombre: 'admin',
      password: 'Wavnoi2017', // Usa una contraseña segura aquí
      rolId: adminRole.id, // Asigna el ID del rol de administrador
    };

    // 3. Usar el método 'create' de tu modelo para insertar el usuario
    const newUser = await UserModel.create(userData);

    console.log('Usuario administrador creado exitosamente:', newUser);
  } catch (error) {
    console.error('Error al crear el usuario administrador:', error);
  } finally {
    // 4. Desconectar Prisma al finalizar
    await prisma.$disconnect();
  }
}

// Llama a la función principal
createAdminUser();