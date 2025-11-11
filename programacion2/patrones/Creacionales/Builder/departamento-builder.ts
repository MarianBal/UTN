import { UnidadBuilder } from "./unidad-builder";
import { UnidadAbstracta } from "./unidad-abstracta";
import { Departamento } from './unidades-concretas';

class DepartamentoBuilder implements UnidadBuilder {
  private _unidad: Departamento = new Departamento;

  setDepto(depto: Departamento): void {
    this._unidad= depto;
  }

  getDepto(): Departamento {
    return this._unidad
  }

  buildPuertas(unidad: UnidadAbstracta): void {};
  buildVentanas(unidad: UnidadAbstracta): void {};
  buildBanios(unidad: UnidadAbstracta): void {};
  build(unidad: UnidadAbstracta): void {};
  createUnidad(): UnidadAbstracta { return new Departamento() };

}

export { DepartamentoBuilder };