import { ProductoAbstracto } from "./producto-abstracto";

class ZapatoUrbanoConcreto extends ProductoAbstracto {
  private _marca: string;

  constructor(
    talle: number,
    tipo: string,
    material: string,
    color: string,
    marca: string
  ) {
    super(talle, material, color, tipo);
    this._marca = marca;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public get marca(): string {
    return this._marca;
  }
}

export { ZapatoUrbanoConcreto };
