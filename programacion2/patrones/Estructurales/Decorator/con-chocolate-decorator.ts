import { CafeDecorador } from "./decorator-abstracto";

class ConChocolate extends CafeDecorador {
  costo(): number {
    return this._cafe.costo() + 8;
  }

  descripcion(): string {
    return this._cafe.descripcion() + ", con chocolate";
  }
}

export { ConChocolate };