abstract class ProductoAbstracto {
  private _talle: number;
  private _material: string;
  private _color: string;
  private _tipo: string;

  constructor(talle: number, material: string, color: string, tipo: string) {
    this._talle= talle;
    this._material= material;
    this._color= color;
    this._tipo = tipo;
  }

  public set talle(value: number) {
    this._talle = value;
  }

  public set material(value: string) {
    this._material = value;
  }

  public set color(value: string) {
    this._color = value;
  }

  public set tipo(value: string) {
    this._tipo = value;
  }

  public get talle(): number {
    return this._talle;
  }

  public get material(): string {
    return this._material;
  }

  public get color(): string {
    return this._color;
  }

  public get tipo(): string {
    return this._tipo;
  }
}

export { ProductoAbstracto };
