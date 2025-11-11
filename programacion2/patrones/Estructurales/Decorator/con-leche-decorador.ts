import { CafeDecorador } from "./decorator-abstracto";

class ConLeche extends CafeDecorador {
  costo(): number {
    return this._cafe.costo() + 5;
  }

  descripcion(): string {
    return this._cafe.descripcion() + ", con leche";
  }
}

export { ConLeche };
