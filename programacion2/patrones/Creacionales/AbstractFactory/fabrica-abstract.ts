interface Chair {
  hasLegs(): void;
  sitOn(): void;
}

interface Sofa {
  lieOn(): void;
}

interface Table {
  placeItem(): void;
}

// Fábrica abstracta
interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createTable(): Table;
}

export { Chair, Sofa, Table, FurnitureFactory };