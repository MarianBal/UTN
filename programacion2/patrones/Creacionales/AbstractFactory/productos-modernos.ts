import { Chair, Sofa, Table } from "./fabrica-abstract";

class ModernChair implements Chair {
  hasLegs(): void {
    console.log("La silla moderna tiene patas metálicas.");
  }
  sitOn(): void {
    console.log("Te sientas en una silla moderna de líneas minimalistas.");
  }
}

class ModernSofa implements Sofa {
  lieOn(): void {
    console.log("Te recuestas en un sofá moderno de cuero sintético.");
  }
}

class ModernTable implements Table {
  placeItem(): void {
    console.log("Colocas tu laptop sobre una mesa moderna de vidrio templado.");
  }
}

export { ModernChair, ModernSofa, ModernTable };