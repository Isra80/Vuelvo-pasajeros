import { Body, Controller, Delete, GatewayTimeoutException, Get, Param, Post, Put } from '@nestjs/common';
import { PasajerosService } from './pasajeros.service';
import { PasajerosDTO } from './dto/pasajeros.dto';

@Controller('api/v1/pasajeros')
export class PasajerosController {
    constructor(private readonly pasajerosServicio:PasajerosService){}

    @Post()
    insertar(@Body() pasajerosDTO:PasajerosDTO){
        return this.pasajerosServicio.insertar(pasajerosDTO);
    }

    @Get()
    todos(){
        return this.pasajerosServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.pasajerosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() pasajerosDTO:PasajerosDTO){
        return this.pasajerosServicio.actualizar(id, pasajerosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pasajerosServicio.eliminar(id);
    }

}
