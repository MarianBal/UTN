import { GestionVersion } from './gestion-version';

abstract class Documento {
  private _nombre: string;
  private _tipo: string;
  private version: GestionVersion;

  constructor(nombre: string, tipo: string) {
    this._nombre = nombre;
    this._tipo = tipo;
  }

  crear(): void {}
  editar(): void {}

  eliminar(): void {}
  abstract validar(): void;
  generarNuevaVersion(): Version {}
  restaurarVersion(v: Version): void {}
  visualizarUltimasDiez(): void {}
  visulizarEnesima(): Version {}
}

export { Documento };
