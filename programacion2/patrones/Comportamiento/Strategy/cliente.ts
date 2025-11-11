import { Documento } from "./documento";
import { Proceso } from "./proceso";

class Cliente {
  private _proceso: Proceso;

  constructor(proceso: Proceso) {
    this._proceso = proceso;
  }

  cambiarFormaProcesamiento(proceso: Proceso): void {
    this._proceso = proceso;
  }

  procesarDocumento(doc: Documento, proceso: Proceso): Documento {
    return proceso.procesar(doc);
  }
}

export { Cliente };
