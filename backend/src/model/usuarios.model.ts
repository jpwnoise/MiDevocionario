import bcrypt from 'bcrypt';
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

// Definimos la interfaz del usuario para la seguridad de tipos
// La relación `rol` ahora es un objeto, no un string
interface User {
  id: number;
  nombre: string | null;
  password: string;
  rolId: number;
  fecha_registro: Date | null;
  ultima_conexion: Date | null;
}

export class UserModel {

  // Método para hashear la contraseña
  private static async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }

  // Ahora el método 'create' recibe 'rolId' en lugar de 'rol'
  public static async create(userData: { nombre: string, password: string, rolId: number }): Promise<User> {
    try {
      // Hasheamos la contraseña
      const hashedPassword = await this.hashPassword(userData.password);
      
      const newUser = await prisma.usuarios_web.create({
        data: {
          nombre: userData.nombre,
          password: hashedPassword,
          rolId: userData.rolId,
          fecha_registro: new Date(),
          ultima_conexion: new Date(),
        }
      });
      
      // Retornamos el objeto de usuario creado por Prisma
      return newUser;
      
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw error;
    }
  }

  // Método para encontrar un usuario por su nombre usando Prisma
  public static async findByUsername(username: string): Promise<User | null> {
    const user = await prisma.usuarios_web.findUnique({
      where: {
        nombre: username
      }
    });

    if (user) {
      // Prisma ya regresa el objeto de usuario directamente
      return user;
    }
    
    return null;
  }
}