import { CafeDecorador } from "./decorator-abstracto";

class ConCrema extends CafeDecorador {
  costo(): number {
    return this._cafe.costo() + 7;
  }

  descripcion(): string {
    return this._cafe.descripcion() + ", con crema";
  }
}

export { ConCrema };