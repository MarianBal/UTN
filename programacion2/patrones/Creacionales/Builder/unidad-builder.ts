import { UnidadAbstracta } from "./unidad-abstracta";

interface UnidadBuilder {
  buildPuertas(unidad: UnidadAbstracta): void;
  buildVentanas(unidad: UnidadAbstracta): void;
  buildBanios(unidad: UnidadAbstracta): void;
  build(unidad: UnidadAbstracta): void;
  createUnidad(): UnidadAbstracta;
}

export { UnidadBuilder };
