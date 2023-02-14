import { Module } from '@nestjs/common';
import { PasajerosController } from './pasajeros.controller';
import { PasajerosService } from './pasajeros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PASAJEROS} from '../common/models/models'; ///falta variable///
import { PasajerosSchema } from './schema/pasajeros.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name:PASAJEROS.name,
        useFactory:()=>{
          return PasajerosSchema;
        }
      }
    ])
  ],
  controllers: [PasajerosController],
  providers: [PasajerosService]
})
export class PasajerosModule {}
