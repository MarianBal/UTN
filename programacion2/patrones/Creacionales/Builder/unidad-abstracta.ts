import { Puerta, Ventana, Banio } from "./utils";

abstract class UnidadAbstracta {
  private _puertas: Array<Puerta> = [];
  private _ventanas: Array<Ventana> = [];
  private _banios: Array<Banio> = [];

  setPuertas(puerta: Puerta): void {
    this._puertas.push(puerta);
  }

  setVentanas(ventana: Ventana): void {
    this._ventanas.push(ventana);
  }

  setBanios(banio: Banio): void {
    this._banios.push(banio);
  }

  getPuertas(): Array<Puerta> {
    return this._puertas;
  }

  getVentanas(): Array<Ventana> {
    return this._ventanas;
  }

  getBanios(): Array<Banio> {
    return this._banios;
  }

  public operacion1() {
    this.getPuertas();
    this.getVentanas();
    this.getBanios();
  }
}

export { UnidadAbstracta };
