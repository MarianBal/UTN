import { Documento } from './documento';

abstract class Proceso {

  abstract procesar(documento: Documento): Documento

}

export { Proceso }