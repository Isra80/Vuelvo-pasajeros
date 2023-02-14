import { HttpStatus } from '@nestjs/common';
import { UsuarioDTO } from './dto/usuario.dto';
import { Model } from 'mongoose';
import { IUsuario } from 'src/common/Interfaces/usuarios.interface';
export declare class UsuariosService {
    private readonly modelo;
    constructor(modelo: Model<IUsuario>);
    hashPassword(password: string): Promise<string>;
    insertar(usuarioDTO: UsuarioDTO): Promise<IUsuario>;
    todos(): Promise<IUsuario[]>;
    uno(id: string): Promise<IUsuario>;
    actualizar(id: string, usuarioDTO: UsuarioDTO): Promise<IUsuario>;
    eliminar(id: string): Promise<{
        status: HttpStatus;
        msg: string;
    }>;
}
