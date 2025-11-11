import { UnidadBuilder } from "./unidad-builder";
import { UnidadAbstracta } from "./unidad-abstracta";

class Director {

  construirUnidad(builder: UnidadBuilder): UnidadAbstracta {
    const unidad = builder.createUnidad();
    builder.buildPuertas(unidad);
    builder.buildVentanas(unidad);
    builder.buildBanios(unidad);
    builder.build(unidad);

    return unidad;
  }
}

export { Director };
