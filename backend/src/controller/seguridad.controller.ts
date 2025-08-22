import type { Request, Response } from 'express';
import { UserModel } from '../model/usuarios.model.ts';
import bcrypt from 'bcrypt';

export const ingresar = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await UserModel.findByUsername(username);

    if ( !user )
        return res.status(404).json({ mensaje: 'Credenciales invalidas' });

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ mensaje: 'Credenciales invalidas' });
    }

    return res.status(200).json({ mensaje: 'Ingreso exitoso', usuario: user });

}