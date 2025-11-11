class Documento {
  private _nombre: string;
  private _contenido: string;

  constructor(nombre: string = '', contenido: string = '') {
    this._nombre = nombre;
    this._contenido = contenido;

  };

  setNombre(nombre: string): void {
    this._nombre = nombre;
  }

  setContenido(contenido: string): void {
    this._contenido = contenido;
  }

  getNombre(): string {
    return this._nombre;
  }

  getContenido(): string {
    return this._contenido;
  }

}

export { Documento };