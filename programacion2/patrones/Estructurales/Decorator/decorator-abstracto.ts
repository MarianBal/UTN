import { ICafe } from "./cafe-interface";

abstract class CafeDecorador implements ICafe {
  protected _cafe: ICafe;

  constructor(cafe: ICafe) {
    this._cafe = cafe;
  }

  abstract costo(): number;
  abstract descripcion(): string;
}

export { CafeDecorador };