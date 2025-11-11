import { ICafe } from './cafe-interface'

class CafeSimple implements ICafe {

  costo(): number {
    return 10;
  }

  descripcion(): string {
    return "Café simple";
  }
}

export { CafeSimple };