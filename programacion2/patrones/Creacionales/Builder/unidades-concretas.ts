import { UnidadAbstracta } from "./unidad-abstracta";

class Oficina extends UnidadAbstracta {
  constructor() {
    super();
  }

  createUnidad(): UnidadAbstracta {
    return new Oficina();
  }
}

class Departamento extends UnidadAbstracta {
  constructor() {
    super();
  }

  createUnidad(): UnidadAbstracta {
    return new Departamento();
  }
}

export { Oficina, Departamento };
