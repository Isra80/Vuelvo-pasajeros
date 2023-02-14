"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const mongoose_1 = require("@nestjs/mongoose");
const models_1 = require("../common/models/models");
const mongoose_2 = require("mongoose");
let UsuariosService = class UsuariosService {
    constructor(modelo) {
        this.modelo = modelo;
    }
    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
    async insertar(usuarioDTO) {
        const hash = await this.hashPassword(usuarioDTO.password);
        const newusaurio = new this.modelo(Object.assign(Object.assign({}, usuarioDTO), { password: hash }));
        return newusaurio.save();
    }
    async todos() {
        return await this.modelo.find();
    }
    async uno(id) {
        return await this.modelo.findById(id);
    }
    async actualizar(id, usuarioDTO) {
        const hash = await this.hashPassword(usuarioDTO.password);
        const usaurio = new this.modelo(Object.assign(Object.assign({}, usuarioDTO), { password: hash }));
        return await this.modelo.findByIdAndUpdate(id, usuarioDTO, { new: true });
    }
    async eliminar(id) {
        await this.modelo.findByIdAndDelete(id);
        return { status: common_1.HttpStatus.OK, msg: 'Se eliminó correctamete' };
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(models_1.USUARIO.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map