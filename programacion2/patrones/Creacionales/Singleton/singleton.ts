class Presidente {
  private _nombre: string;
  private _apellido: string;
  private _titulo: string;
  private static _unicaInstancia: Presidente;

  private constructor(pNombre: string, pApellido: string, pTitulo: string) {
    this._apellido = pApellido;
    this._nombre = pNombre;
    this._titulo = pTitulo;
  }

  public get nombre(): string {
    return this._nombre;
  }

  public get apellido(): string {
    return this._apellido;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public static get unicaInstancia(): Presidente {
    return Presidente._unicaInstancia;
  }

  public set nombre(value: string) {
    this._nombre = value;
  }

  public set apellido(value: string) {
    this._apellido = value;
  }

  public set titulo(value: string) {
    this._titulo = value;
  }

  public static nuevoPresidente(
    pNombre: string,
    pApellido: string,
    pTitulo: string
  ): void {
    Presidente._unicaInstancia = new Presidente(pNombre, pApellido, pTitulo);
  }

  public static presentarse(): string {
    if (Presidente.unicaInstancia)
      return (
        "Excelentisimo/a " +
        Presidente.unicaInstancia.titulo +
        " " +
        Presidente.unicaInstancia.apellido +
        ", " +
        Presidente.unicaInstancia.nombre
      );
    else return "Vacante";
  }
}

export { Presidente };
