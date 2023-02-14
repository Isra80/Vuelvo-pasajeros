import mongoose from 'mongoose';
export declare const UsuarioSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    nombre?: string;
    usuario?: string;
    email?: string;
    password?: string;
}>;
