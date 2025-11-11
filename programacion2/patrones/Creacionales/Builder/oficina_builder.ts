import { UnidadBuilder } from "./unidad-builder";
import { UnidadAbstracta } from "./unidad-abstracta";
import { Oficina } from "./unidades-concretas";
import { Puerta, Ventana, Banio } from "./utils";

class OficinaBuilder implements UnidadBuilder {
  private _unidad: Oficina = new Oficina();

  setOficina(oficina: Oficina): void {
    this._unidad = oficina;
  }

  getOficina(): Oficina {
    return this._unidad;
  }

  buildPuertas(): void {
    this._unidad.setPuertas(new Puerta());
  }

  buildVentanas(): void {
    this._unidad.setVentanas(new Ventana());
  }

  buildBanios(): void {
    this._unidad.setBanios(new Banio());
  }

  build(): Oficina {
    return this._unidad;
  }
    createUnidad(): UnidadAbstracta { return new Oficina() };
  
}

export { OficinaBuilder };
