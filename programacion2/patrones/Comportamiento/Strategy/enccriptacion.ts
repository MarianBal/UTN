import { Documento } from './documento';
import { Proceso } from './proceso';

 class Encriptacion extends Proceso {

  procesar(documento: Documento): Documento {
    
    console.log(`El documento ${documento.getNombre()} fue encriptado`)

    return documento;
    
  }

}

export { Encriptacion }