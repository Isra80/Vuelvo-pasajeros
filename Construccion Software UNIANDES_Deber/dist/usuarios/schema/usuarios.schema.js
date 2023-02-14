"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UsuarioSchema = new mongoose_1.default.Schema({
    nombre: { type: String, require: true },
    usuario: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
}, {
    timestamps: true
});
exports.UsuarioSchema.index({ usuario: 1 }, { unique: true });
exports.UsuarioSchema.index({ email: 1 }, { unique: true });
//# sourceMappingURL=usuarios.schema.js.map