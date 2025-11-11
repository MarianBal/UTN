abstract class EmpleadoAbstracto {
  private _nombre: string;
  private _apellido: string;
  private _legajo: number;
  private _superior: EmpleadoAbstracto | undefined = undefined;

  public constructor(
    nombre: string,
    apellido: string,
    legajo: number,
    superior: EmpleadoAbstracto | undefined
  ) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._legajo = legajo;

    if (superior != undefined) this._superior = superior;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }

  public set apellido(value: string) {
    this._apellido = value;
  }

  public set legajo(value: number) {
    this._legajo = value;
  }

  public set superior(value: EmpleadoAbstracto | undefined) {
    this._superior = value;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public get apellido(): string {
    return this._apellido;
  }

  public get legajo(): number {
    return this._legajo;
  }

  public get superior(): EmpleadoAbstracto | undefined {
    return this._superior ?? undefined;
  }

  public presentarse(): string {
    return this.apellido + ", " + this.legajo + " con legajo " + this.legajo;
  }

  public abstract Tope(): number;

  public abstract autorizar(pMonto: number): void;
}

export { EmpleadoAbstracto };
