import { Documento } from './documento';
import { Proceso } from './proceso';

 class Compresion extends Proceso {

  procesar(documento: Documento): Documento {
    
    console.log(`El documento ${documento.getNombre()} fue comprimido`)

    return documento;
    
  }

}

export { Compresion }