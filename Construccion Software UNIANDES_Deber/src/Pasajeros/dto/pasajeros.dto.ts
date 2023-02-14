import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PasajerosDTO{
    @IsNotEmpty()
    @IsString()
   readonly nombre: string;
   @IsNotEmpty()
   @IsString()
   readonly email:string;
}