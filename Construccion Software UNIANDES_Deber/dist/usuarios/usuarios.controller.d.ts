import { UsuariosService } from './usuarios.service';
import { UsuarioDTO } from './dto/usuario.dto';
export declare class UsuariosController {
    private readonly usuarioServicio;
    constructor(usuarioServicio: UsuariosService);
    insertar(usuarioDTO: UsuarioDTO): Promise<import("../common/Interfaces/usuarios.interface").IUsuario>;
    todos(): Promise<import("../common/Interfaces/usuarios.interface").IUsuario[]>;
    uno(id: string): Promise<import("../common/Interfaces/usuarios.interface").IUsuario>;
    actualizar(id: string, usuarioDTO: UsuarioDTO): Promise<import("../common/Interfaces/usuarios.interface").IUsuario>;
    eliminar(id: string): Promise<{
        status: import("@nestjs/common").HttpStatus;
        msg: string;
    }>;
}
