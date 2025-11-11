import { Chair, Sofa, Table } from "./fabrica-abstract";
import { FurnitureFactory } from "./fabrica-abstract";
import { VictorianChair, VictorianSofa, VictorianTable } from "./productos-victorianos";
import { ModernChair, ModernSofa, ModernTable } from "./productos-modernos";

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
  createTable(): Table {
    return new ModernTable();
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
  createTable(): Table {
    return new VictorianTable();
  }
}

export { ModernFurnitureFactory, VictorianFurnitureFactory };