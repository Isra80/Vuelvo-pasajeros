import mongoose from 'mongoose';

export const PasajerosSchema = new mongoose.Schema({
  nombre: { type: String, require: true },
  email: { type: String, require: true },
},
{
    timestamps:true
}
);

PasajerosSchema.index({nombre:1},{unique:true});
PasajerosSchema.index({email:1},{unique:true});
