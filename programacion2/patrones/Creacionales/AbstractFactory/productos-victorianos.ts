import { Chair, Sofa, Table } from "./fabrica-abstract";

class VictorianChair implements Chair {
  hasLegs(): void {
    console.log("La silla victoriana tiene patas talladas en madera.");
  }
  sitOn(): void {
    console.log("Te sientas en una silla victoriana con tapizado de terciopelo.");
  }
}

class VictorianSofa implements Sofa {
  lieOn(): void {
    console.log("Te recuestas en un sofá victoriano ornamentado.");
  }
}

class VictorianTable implements Table {
  placeItem(): void {
    console.log("Colocas el té sobre una mesa victoriana con detalles dorados.");
  }
}

export { VictorianChair, VictorianSofa, VictorianTable };