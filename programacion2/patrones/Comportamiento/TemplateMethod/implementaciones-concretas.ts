import { PanAbstracto } from "./pan-abstract";

class PanBlanco extends PanAbstracto {
  protected prepararIngredientes(): void {
    console.log("Preparando harina blanca, levadura y agua...");
  }

  protected amasar(): void {
    console.log("Amasando pan blanco...");
  }

  protected hornear(): void {
    console.log("Horneando a 180°C por 30 minutos...");
  }
}

class PanIntegral extends PanAbstracto {
  protected prepararIngredientes(): void {
    console.log("Preparando harina integral, levadura y agua tibia...");
  }

  protected amasar(): void {
    console.log("Amasando pan integral...");
  }

  protected hornear(): void {
    console.log("Horneando a 200°C por 40 minutos...");
  }

  protected agregarExtras(): void {
    console.log("Agregando semillas de lino y chía...");
  }
}

export { PanBlanco, PanIntegral };