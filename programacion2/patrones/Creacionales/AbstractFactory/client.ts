import { Chair, Sofa, Table } from "./fabrica-abstract";
import { FurnitureFactory } from "./fabrica-abstract";

class Client {
  private chair: Chair;
  private sofa: Sofa;
  private table: Table;

  constructor(factory: FurnitureFactory) {
    this.chair = factory.createChair();
    this.sofa = factory.createSofa();
    this.table = factory.createTable();
  }

  public describeFurniture(): void {
    this.chair.hasLegs();
    this.chair.sitOn();
    this.sofa.lieOn();
    this.table.placeItem();
  }
}

export { Client };